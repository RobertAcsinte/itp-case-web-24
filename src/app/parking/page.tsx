import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ParkingCard from "./ParkingCard/ParkingCard";
import { fetchParkingPlaces } from "../apiCalls";


export default async function Page () {
    const parkingPlaces = await fetchParkingPlaces();

    return (
        <main className="wrapper">
            <div className="navbar-title">
                <Link href="/" aria-label="Link to go back to the home page">
                    <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
                </Link>
                <h1 id="available-parkings">Parkings in Ghent</h1>
            </div>
            <ul aria-labelledby="available-parkings">
                {parkingPlaces.map((parkingInfo) => (
                    <li>
                        <ParkingCard key={parkingInfo.name} parking={parkingInfo}/>
                    </li>
                ))}
            </ul>
        </main>
    )
};