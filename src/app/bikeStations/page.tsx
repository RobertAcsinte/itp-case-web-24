import Link from "next/link";
import { getData } from "../utils/networkRequests"
import BikeStationCard from "./BikeStationCard/BikeStationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { BikeStation } from "./BikeStationType";

type BikeParkings = {
  results: BikeStation[];
}

const bikeStations = [
  'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-dampoort/records?select=id%2C%20name%2C%20bikes_in_use%2C%20bikes_available',
  'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein/records?select=id%2C%20name%2C%20bikes_in_use%2C%20bikes_available'
]

export default async function Bikes() {
   
    const data = await Promise.all(
      bikeStations.map(async (api) => {
        const station = await getData<BikeParkings>(api);
        return station;
      })
    );
    
    return (
      <main className="wrapper">
        <div className="navbar-title">
          <Link href="/" aria-label="Link to go back to the home page">
            <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
          </Link>
          <h1>Bike Stations</h1>
        </div>
        {data.map((stations) => (
          stations.results.map((stationInfo) => (
            <BikeStationCard key={stationInfo.id} station={stationInfo}/>
          ))
        ))}
      </main>
    )
};