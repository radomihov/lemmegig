import {useState, useEffect} from "react";

import artistsAPI from "../api/artists-api.js";

export function useGetAllArtists() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        artistsAPI.getAll()
            .then(result => setArtists(result.data));
    }, []);
    return [artists, setArtists];
}
export function useGetOneArtist(artistId) {
    const [artist, setArtist] = useState();

    useEffect(() => {
        artistsAPI.getOne(artistId)
            .then((result => setArtist(result)));
    }, [artistId]);

    return [artist, setArtist];
}