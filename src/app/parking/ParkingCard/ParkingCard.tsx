import Link from 'next/link';
import { ParkingDetails } from '../ParkingDetailsType';


export default function ParkingCard({parking}: {parking: ParkingDetails}) {

    return (
        <section>
            <div className="card">
                <h2>{parking.name}</h2>
                <p><b>Total Capacity:</b> {parking.totalcapacity} ({parking.availablecapacity} available)</p>
                <Link
                    href={{
                        pathname: `parking/${parking.name}/details`,
                    }}
                    aria-label="Link to go park details page" 
                    className="details-link"
                >
                    Details
                </Link>
            </div>
        </section>
    );
}