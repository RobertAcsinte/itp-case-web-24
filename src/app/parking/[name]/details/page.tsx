import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { fetchParkingPlaceDetails } from "../../../apiCalls";

export default async function Page(searchParams: { params: { name: string } } ) {
    const {params: { name }} = searchParams;
    const parkingDetails = await fetchParkingPlaceDetails(name);

    return (
        <main className="wrapper">
            <div className="navbar-title">
                <Link href="/parking" aria-label="Link to go back to the list of parkings">
                    <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
                </Link>
                <h1 id="parking-name">{parkingDetails.name}</h1>
            </div>
            <section aria-labelledby="parking-name">
                <div className="card">
                    <h2>Parking Information</h2>
                    <p><b>Category:</b> {parkingDetails.categorie}</p>
                    <p><b>Description:</b> {parkingDetails.description}</p>
                    <p><b>Total spots:</b> {parkingDetails.totalcapacity}</p>
                    <p><b>Available spots:</b> {parkingDetails.availablecapacity}</p>
                    <p><b>Occupied spots:</b> {parkingDetails.occupation}</p>
                    <p><b>Percentage of taken spots from total spots:</b> {((parkingDetails.occupation / parkingDetails.totalcapacity) * 100).toFixed(2)}%</p>
                    <Link
                        href={`https://www.google.com/maps/search/?api=1&query=${parkingDetails.location.lat}%2C${parkingDetails.location.lon}`}
                        aria-label="Link to go to Google Maps" 
                        className="details-link"
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        Open in Google Maps
                    </Link>
                </div>
            </section>
        </main>
    )
}