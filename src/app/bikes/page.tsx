import { notFound } from "next/navigation"
import { getData } from "../utils/networkRequests"

type bikeParking = {
  results: {
      name: string;
      bikes_in_use: number;
      bikes_available: number;
  }[];
}

const bikeStations = [
  'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-dampoort/records?select=name%2C%20bikes_in_use%2C%20bikes_available',
  'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein/records?select=name%2C%20bikes_in_use%2C%20bikes_available'
]

export default async function Bikes() {
   
    const data = await Promise.all(
      bikeStations.map(async (api) => {
        const station = await getData<bikeParking>(api);
        return station;
      })
    );
    
    return (
      <ul>
        {data.map((station) => (
          station.results.map((bike) => (
            <li key={bike.name}>{bike.name}</li>
          ))
        ))}
      </ul>
    )
};