import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faSquareParking } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="wrapper-center">
        <div className="card-grid">
          <Link href="/bikeStations" className="card" aria-label="Link to the page about bikes">
            <FontAwesomeIcon icon={faBicycle} className="icon" aria-hidden="true"/>
          </Link>
          <Link href="/bikeStations" className="card" aria-label="Link to the page about parking">
            <FontAwesomeIcon icon={faSquareParking} className="icon" aria-hidden="true"/>
          </Link>
      </div>
    </main>
  );
}
