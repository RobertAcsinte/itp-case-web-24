import { BikeParkings } from "./bikeStations/BikeStationType";
import { Parkings } from "./parking/ParkingDetailsType";
import { getData } from "./utils/networkRequests";

export const fetchBikeStations = async () => {
    const endpoints = [
        'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-dampoort/records?select=id%2C%20name%2C%20bikes_in_use%2C%20bikes_available',
        'https://data.stad.gent/api/explore/v2.1/catalog/datasets/blue-bike-deelfietsen-gent-sint-pieters-m-hendrikaplein/records?select=id%2C%20name%2C%20bikes_in_use%2C%20bikes_available'
    ]
    const data = await Promise.all(
        endpoints.map(async (endpoint) => {
            const station = await getData<BikeParkings>(endpoint);
            return station;
        })
    );
    return data;
}

export const fetchParkingPlaces = async () => {
    const endpoint = 'https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?select=name%2C%20totalcapacity%2C%20availablecapacity%2C%20occupation%2C%20isopennow%2C%20categorie%2C%20description%2C%20location&where=availablecapacity%20%3E%3D%20(totalcapacity%20%2F%202)%20AND%20isopennow%20%3D%201&order_by=totalcapacity%20DESC'
    const parkingPlaces = (await getData<Parkings>(endpoint)).results;
    return parkingPlaces;
}

export const fetchParkingPlaceDetails = async (name: string) => {
    const endpointDetails = `https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?select=name%2C%20totalcapacity%2C%20availablecapacity%2C%20occupation%2C%20isopennow%2C%20categorie%2C%20description%2C%20location&where=name%3D%22${name}%22`
    const parkingDetails = (await getData<Parkings>(endpointDetails)).results[0];
    return parkingDetails;
}
