import {useState, useEffect} from "react";

import meetupsAPI from "../api/meetups-api.js";

export function useGetAllMeetups() {
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        meetupsAPI.getAll()
            .then(result => setMeetups(result.data));
    }, []);
    return [meetups, setMeetups];
}
export function useGetOneMeetup(meetupId) {
    const [meetup, setMeetup] = useState();

    useEffect(() => {
        meetupsAPI.getOne(meetupId)
            .then((result => setMeetup(result)));
    }, [meetupId]);

    return [meetup, setMeetup];
}