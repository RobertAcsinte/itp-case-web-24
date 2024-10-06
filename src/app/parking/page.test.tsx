import { afterAll, afterEach, beforeAll, expect, it, } from 'vitest';
import { render } from "@testing-library/react";
import Parking from './page';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';


const parkingPlaces = [
    {
        results: [
            {
                "name": "The Loop Test",
                "totalcapacity": 2490,
                "availablecapacity": 2232,
                "occupation": 10,
                "isopennow": 1,
                "categorie": "parking buiten LEZ",
                "description": "Bovengrondse parkeergarage The Loop in Gent",
                "location": {
                  "lon": 3.6864592214319964,
                  "lat": 51.02542334883013
                }
              },
        ]
    },
]
  
export const restHandlers = [
    http.get('https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?select=name%2C%20totalcapacity%2C%20availablecapacity%2C%20occupation%2C%20isopennow%2C%20categorie%2C%20description%2C%20location&where=availablecapacity%20%3E%3D%20(totalcapacity%20%2F%202)%20AND%20isopennow%20%3D%201&order_by=totalcapacity%20DESC', () => {
        return HttpResponse.json(parkingPlaces[0])
    })
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen())

afterAll(() => server.close())

afterEach(() => server.resetHandlers())

it('Snapshot Parking Spaces Page', async () => {
    const jsx = await Parking();
    const result = render(jsx)
    expect(result).toMatchSnapshot()
})
