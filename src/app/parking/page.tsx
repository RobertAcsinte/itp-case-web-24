import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getData } from "../utils/networkRequests";
import ParkingCard from "./ParkingCard/ParkingCard";

type Parkings = {
    results: {
        name: string;
        totalcapacity: number;
        availablecapacity: number;
        occupation: number;
        isopennow: number,
        categorie: string,
        description: string,
        location: {
            lon: number,
            lat: number
        }
    }[];
  }

  const parkings = [
    'https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?select=name%2C%20totalcapacity%2C%20availablecapacity%2C%20occupation%2C%20isopennow%2C%20categorie%2C%20description%2C%20location&where=availablecapacity%20%3E%3D%20(totalcapacity%20%2F%202)&order_by=totalcapacity%20DESC'
  ]

export default async function Page () {
    const data = await Promise.all(
        parkings.map(async (api) => {
          const station = await getData<Parkings>(api);
          return station;
        })
      );

    return (
        <main className="wrapper">
            <div className="title-container">
                <Link href="/" aria-label="Link to go back to the home page">
                    <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
                </Link>
                <h1>Parkings in Ghent</h1>
            </div>
                {data.map((parkings) => (
                    parkings.results.map((parkingInfo) => (
                        <ParkingCard key={parkingInfo.name} parking={parkingInfo}/>
                    ))
                ))}
        </main>
    )
};