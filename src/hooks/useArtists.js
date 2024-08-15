import {useState, useEffect} from "react";
import artistsAPI, {create, del, edit} from "../api/artists-api.js";

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
    const [artist, setArtist] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        artistsAPI.getOne(artistId)
            .then((result => {
                setArtist(result.data)
                setIsLoading(false)
            }));
    }, [artistId]);

    return {artist, setArtist, isLoading};
}

export function useCreateArtist() {
    const createArtistHandler = async (name, image, genres, place, bio) => {
        const {newArtist} = await create(name, image, genres, place, bio);

        return newArtist;
    }

    return createArtistHandler;
}

export function useDeleteArtist() {
    const deleteArtistHandler = async (artistId) => {

        const {res} = await del(artistId);

        return res;
    }

    return deleteArtistHandler;
}

export function useEditArtist() {
    const editArtistHandler = async (id, name, image, genres, place, bio) => {
        const {editedArtist} = await edit(id, name, image, genres, place, bio);

        return editedArtist;
    }

    return editArtistHandler;
}