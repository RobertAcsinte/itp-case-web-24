import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faSquareParking } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="wrapper-center">
        <div className="card-grid">
        <div className="card" aria-label="Bikes">
          <FontAwesomeIcon icon={faBicycle} className="icon" aria-hidden="true"/>
        </div>
        <div className="card" aria-label="Parking">
          <FontAwesomeIcon icon={faSquareParking} className="icon" aria-hidden="true"/>
        </div>
      </div>
    </main>
  );
}
