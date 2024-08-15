import {useState, useEffect} from "react";
import venuesAPI, {create, del, edit} from "../api/venues-api.js";
import {useAuthContext} from "../contexts/AuthContext.jsx";

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
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAuthContext();
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        venuesAPI.getOne(venueId)
            .then((result => {
                setVenue(result.data)
                if (user?.id === result.data.created_by) {
                    setIsOwner(true);
                }
                setIsLoading(false)
            }));
    }, [venueId]);

    return {venue, setVenue, isLoading, isOwner};
}

export function useCreateVenues() {
    const createVenueHandler = async (name, image, address, phone, email, description) => {
        const {newVenue} = await create(name, image, address, phone, email, description);

        return newVenue;
    }

    return createVenueHandler;
}

export function useDeleteVenue() {
    const deleteVenueHandler = async (venueId) => {

        const {res} = await del(venueId);

        return res;
    }

    return deleteVenueHandler;
}

export function useEditVenue() {
    const editVenueHandler = async (id, name, image, genres, place, bio) => {
        const {editedVenue} = await edit(id, name, image, genres, place, bio);

        return editedVenue;
    }

    return editVenueHandler;
}