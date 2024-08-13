import {useState, useEffect} from "react";
import artistsAPI, {create} from "../api/artists-api.js";

export function useGetAllArtists() {
    const [artists, setArtists] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        artistsAPI.getAll()
            .then(result => {
                setArtists(result.data)
                setIsLoading(false)
            });
    }, []);
    return {artists, setArtists, isLoading};
}

export function useGetOneArtist(artistId) {
    const [artist, setArtist] = useState();

    useEffect(() => {
        artistsAPI.getOne(artistId)
            .then((result => setArtist(result)));
    }, [artistId]);

    return [artist, setArtist];
}

export function useCreateArtists() {
    const createArtistHandler = async (name, image, genres, place, bio) => {
        const {newArtist} = await create(name, image, genres, place, bio);

        return newArtist;
    }

    return createArtistHandler;
}

// export function useEditArtists() {
//     const [artists, setArtists] = useState();
//     const [isLoading, setIsLoading] = useState(true);
//
//     useEffect(() => {
//         artistsAPI.getAll()
//             .then(result => {
//                 setArtists(result.data)
//                 setIsLoading(false)
//             });
//     }, []);
//     return {artists, setArtists, isLoading};
// }