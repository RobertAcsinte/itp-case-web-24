export type ParkingDetails = {
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