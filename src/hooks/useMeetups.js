import {useState, useEffect} from "react";
import meetupsAPI, {create, del, edit} from "../api/meetups-api.js";
import {useAuthContext} from "../contexts/AuthContext.jsx";

export function useGetAllMeetups() {
    const [meetups, setMeetups] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        meetupsAPI.getAll()
            .then(result => {
                setMeetups(result.data)
                setIsLoading(false)
            });
    }, []);
    return {meetups, setMeetups, isLoading};
}

export function useGetOneMeetup(meetupId) {
    const [meetup, setMeetup] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const {user} = useAuthContext();
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        meetupsAPI.getOne(meetupId)
            .then((result => {
                setMeetup(result.data)
                if (user?.id === result.data.created_by) {
                    setIsOwner(true);
                }
                setIsLoading(false)
            }));
    }, [meetupId]);

    return {meetup, setMeetup, isLoading, isOwner};
}

export function useCreateMeetup() {
    const createMeetupHandler = async (gig_id, venue_id, start, end, type) => {
        const {newMeetup} = await create(gig_id, venue_id, start, end, type);

        return newMeetup;
    }

    return createMeetupHandler;
}

export function useDeleteMeetup() {
    const deleteMeetupHandler = async (meetupId) => {

        const {res} = await del(meetupId);

        return res;
    }

    return deleteMeetupHandler;
}

export function useEditMeetup() {
    const editMeetupHandler = async (id, gig_id, venue_id, start, end, type) => {
        const {editedMeetup} = await edit(id, gig_id, venue_id, start, end, type);

        return editedMeetup;
    }

    return editMeetupHandler;
}