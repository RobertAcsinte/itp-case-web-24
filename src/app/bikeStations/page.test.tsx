import { afterAll, afterEach, beforeAll, expect, it, } from 'vitest';
import { render } from "@testing-library/react";
import Bikes from './page';
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'


const station = [
    {
        results: [
            {
                id: 1,
                name: 'Station 1',
                bikes_in_use: 2,
                bikes_available: 3
            }
        ]
    },
    {
        results: [
            {
                id: 2,
                name: 'Station 2',
                bikes_in_use: 7,
                bikes_available: 7
            }
        ]
    }
]
  
export const restHandlers = [
    http.get('https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-dampoort/records?select=id%2C%20name%2C%20bikes_in_use%2C%20bikes_available', () => {
        return HttpResponse.json(station[0])
    }),
    http.get('https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein/records?select=id%2C%20name%2C%20bikes_in_use%2C%20bikes_available', () => {
        return HttpResponse.json(station[1])
    }),
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen())

afterAll(() => server.close())

afterEach(() => server.resetHandlers())

it('Snapshot Bike Station Page', async () => {
    const jsx = await Bikes();
    const result = render(jsx)
    expect(result).toMatchSnapshot()
})