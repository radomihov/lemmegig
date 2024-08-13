import {useState, useEffect} from "react";
import venuesAPI, {create} from "../api/venues-api.js";

export function useGetAllVenues() {
    const [venues, setVenues] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        venuesAPI.getAll()
            .then(result => {
                setVenues(result.data)
                setIsLoading(false)
            });
    }, []);
    return {venues, setVenues, isLoading};
}

export function useGetOneVenue(venueId) {
    const [venue, setVenue] = useState();

    useEffect(() => {
        venuesAPI.getOne(venueId)
            .then((result => setVenue(result)));
    }, [venueId]);

    return [venue, setVenue];
}

export function useCreateVenues() {
    const createVenueHandler = async (name, image, address, phone, email, description) => {
        const {newVenue} = await create(name, image, address, phone, email, description);

        return newVenue;
    }

    return createVenueHandler;
}