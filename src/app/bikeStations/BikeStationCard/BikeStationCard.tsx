import style from './BikeStationCard.module.scss';

type Station = {
    id: number;
    name: string;
    bikes_in_use: number;
    bikes_available: number;
}

export default function BikeStationCard({station}: {station: Station}) {
    
    return (
        <div className={style.container}>
            <div className={style.titleWrapper}>
                <h2>{station.name}</h2>
                <button>Copy to clipboard</button>
            </div>
            <p><b>Bikes available:</b> {station.bikes_available}</p>
            <p><b>Total bikes:</b> {station.bikes_in_use + station.bikes_available}</p>
        </div>
    );
}