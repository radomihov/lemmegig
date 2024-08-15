import {useState, useEffect} from "react";
import gigsAPI, {create, edit, del} from "../api/gigs-api.js";
import {useAuthContext} from "../contexts/AuthContext.jsx";

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
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAuthContext();
    const [isOwner, setIsOwner] = useState(false);
    const [isParticipant, setIsParticipant] = useState(false);

    useEffect(() => {
        gigsAPI.getOne(gigId)
            .then((result => {
                setGig(result.data)
                if (user?.id === result.data.created_by) {
                    setIsOwner(true);
                }
                if (result.data.participants.includes(user?.id)) {
                    setIsParticipant(true)
                }
                setIsLoading(false)
            }));
    }, [gigId]);

    return {gig, setGig, isLoading, isOwner, isParticipant};
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        gigsAPI.getOnePublic(gigId)
            .then((result => {
                setGig(result.data)
                setIsLoading(false)
            }));
    }, [gigId]);

    return {gig, setGig, isLoading};
}

export function useCreateGig() {
    const createGigHandler = async (name, description, fee, isPublic, image) => {
        const {newGig} = await create(name, description, fee, isPublic, image);

        return newGig;
    }

    return createGigHandler;
}
export function useDeleteGig() {
    const deleteGigHandler = async (gigId) => {

        const {res} = await del(gigId);

        return res;
    }

    return deleteGigHandler;
}

export function useEditGig() {
    const editGigHandler = async (id, name, description, fee, isPublic, image) => {
        const {editedGig} = await edit(id, name, description, fee, isPublic, image);

        return editedGig;
    }

    return editGigHandler;
}