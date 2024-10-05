import Link from 'next/link';
import style from './ParkingCard.module.scss';

type Park = {
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
}


export default function ParkingCard({parking}: {parking: Park}) {

    return (
        <section>
            <div className={style.container}>
                <h2>{parking.name}</h2>
                <p><b>Capacity:</b> {parking.totalcapacity}</p>
                <Link href="/" aria-label="Link to go park details page" className={style.detailsLink}>
                    Details
                </Link>
            </div>
        </section>
    );
}