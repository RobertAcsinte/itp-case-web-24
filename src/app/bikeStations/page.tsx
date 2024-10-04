import { getData } from "../utils/networkRequests"
import BikeStationCard from "./BikeStationCard/BikeStationCard";

type bikeParking = {
  results: {
    id: number;
    name: string;
    bikes_in_use: number;
    bikes_available: number;
  }[];
}

const bikeStations = [
  'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-dampoort/records?select=id%2C%20name%2C%20bikes_in_use%2C%20bikes_available',
  'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein/records?select=id%2C%20name%2C%20bikes_in_use%2C%20bikes_available'
]

export default async function Bikes() {
   
    const data = await Promise.all(
      bikeStations.map(async (api) => {
        const station = await getData<bikeParking>(api);
        return station;
      })
    );
    
    return (
      <main className="wrapper">
        {data.map((stations) => (
          stations.results.map((stationInfo) => (
            <BikeStationCard key={stationInfo.id} station={stationInfo}/>
          ))
        ))}
      </main>
    )
};