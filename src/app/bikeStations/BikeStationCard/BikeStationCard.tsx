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
            <h2>{station.name}</h2>
            <p><b>Bikes available:</b> {station.bikes_available}</p>
            <p><b>Total bikes:</b> {station.bikes_in_use + station.bikes_available}</p>
        </div>
    );
}