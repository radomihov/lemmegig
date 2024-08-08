import {useState, useEffect} from "react";

import gigsAPI from "../api/gigs-api.js";

export function useGetAllGigs() {
    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        gigsAPI.getAll()
            .then(result => setGigs(result.data));
    }, []);

    return [gigs, setGigs];
}
export function useGetOneGig(gigId) {
    const [gig, setGig] = useState();

    useEffect(() => {
        gigsAPI.getOne(gigId)
            .then((result => setGig(result)));
    }, [gigId]);

    return [gig, setGig];
}