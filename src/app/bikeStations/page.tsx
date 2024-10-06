import Link from "next/link";
import BikeStationCard from "./BikeStationCard/BikeStationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { fetchBikeStations } from "../apiCalls";


export default async function Bikes() {

   const bikeStations = await fetchBikeStations();
    
    return (
      <main className="wrapper">
        <div className="navbar-title">
          <Link href="/" aria-label="Link to go back to the home page">
            <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
          </Link>
          <h1 id="bike-stations-heading">Bike Stations</h1>
        </div>
        <ul aria-labelledby="bike-stations-heading">
          {bikeStations.map((station) => (
            station.results.map((stationInfo) => (
              <li>
                <BikeStationCard key={stationInfo.id} station={stationInfo}/>
              </li>
            ))
          ))}
        </ul>
      </main>
    )
};