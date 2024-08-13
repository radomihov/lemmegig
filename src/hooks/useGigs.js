import {useState, useEffect} from "react";
import gigsAPI, {create} from "../api/gigs-api.js";

export function useGetAllGigs() {
    const [gigs, setGigs] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        gigsAPI.getAll()
            .then(result => {
                setGigs(result.data)
                setIsLoading(false)
            });
    }, []);

    return {gigs, setGigs, isLoading};
}
export function useGetOneGig(gigId) {
    const [gig, setGig] = useState();

    useEffect(() => {
        gigsAPI.getOne(gigId)
            .then((result => setGig(result)));
    }, [gigId]);

    return [gig, setGig];
}

export function useGetAllPublicGigs() {
    const [gigs, setGigs] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        gigsAPI.getAllPublic()
            .then(result => {
                setGigs(result.data)
                setIsLoading(false)
            });
    }, []);

    return {gigs, setGigs, isLoading};
}
export function useGetOnePublicGig(gigId) {
    const [gig, setGig] = useState();

    useEffect(() => {
        gigsAPI.getOnePublic(gigId)
            .then((result => setGig(result)));
    }, [gigId]);

    return [gig, setGig];
}

export function useCreateGigs() {
    const createGigHandler = async (name, description, fee, is_public, image) => {
        const {newGig} = await create(name, description, fee, is_public, image);

        return newGig;
    }

    return createGigHandler;
}