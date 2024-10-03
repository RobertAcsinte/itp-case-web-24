import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faSquareParking } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="wrapper-center">
        <div className="card-grid">
        <button className="card" aria-label="Link to the page about bikes">
          <FontAwesomeIcon icon={faBicycle} className="icon" aria-hidden="true"/>
        </button>
        <button className="card" aria-label="Link to the page about parking">
          <FontAwesomeIcon icon={faSquareParking} className="icon" aria-hidden="true"/>
        </button>
      </div>
    </main>
  );
}
