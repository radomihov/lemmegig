import artistsAPI from "../api/artists-api.js";
import venuesAPI from "../api/venues-api.js";
import gigsAPI from "../api/gigs-api.js";
import {useEffect, useState} from "react";

export function useGetMeetupOptions(gigId) {
    const [artistOptions, setArtistOptions] = useState();
    const [venueOptions, setVenueOptions] = useState();

    const typeOptions = [
        {id: 1, name: 'репетиция'},
        {id: 2, name: 'участие'},
    ];

    useEffect(() => {
        gigsAPI.getOne(gigId)
            .then(gig => {
                setArtistOptions(gig?.data.artists);
                setVenueOptions(gig?.data.venues);

                artistsAPI.getAll()
                    .then(artists => {
                        setArtistOptions(prevOptions => {
                            return [
                                ...prevOptions,
                                ...artists.data.filter(
                                    artist => !prevOptions.some(
                                        option => option.id === artist.id
                                    )
                                )
                            ];
                        });

                        venuesAPI.getAll()
                            .then(venues => {
                                setVenueOptions(prevOptions => {
                                    return [
                                        ...prevOptions,
                                        ...venues.data.filter(
                                            venue => !prevOptions.some(
                                                option => option.id === venue.id
                                            )
                                        )
                                    ];
                                });
                            })
                    });
            });
    }, [gigId]);

    return {typeOptions, artistOptions, venueOptions};
}
