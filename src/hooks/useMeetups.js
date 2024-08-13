import {useState, useEffect} from "react";

import meetupsAPI from "../api/meetups-api.js";

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

    useEffect(() => {
        meetupsAPI.getOne(meetupId)
            .then((result => setMeetup(result)));
    }, [meetupId]);

    return [meetup, setMeetup];
}