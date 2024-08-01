import {useState, useEffect} from "react";

import * as gigsAPI from '../../api/gigs-api'

import {GigProps} from "../gigs/GigTypes.ts";

function Affiche() {
    const [gigs, setGigs] = useState<GigProps[]>([]);

    useEffect(() => {
            gigsAPI.getPublic()
                .then(result => setGigs(result.data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto my-8 px-2">

            <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
                Предстоящи събития
            </div>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
                {gigs.map(gig => (
                    <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400" key={gig.id}>
                        <div className="relative w-full aspect-video">
                            <img className="rounded w-full h-full object-cover"
                                 src={gig.image ?? "https://assets.petco.com/petco/image/upload/f_auto,q_auto/rabbit-care-sheet"}
                                 alt={gig.name} loading="lazy"/>

                            <div
                                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                                <h2 className="text-xl font-semibold">{gig.name}</h2>
                                <p className="font-medium text-sm">{gig.artists ?? "Неизвестен артист"}</p>
                                <p className="font-medium text-sm">{gig.venue ?? "Неизвестно място"}</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-beetween gap-3 px-4 py-2">

                            <p className="text-gray-600 two-lines">
                                {gig.description ?? "Няма налично описание"}
                            </p>
                            <ul className="flex flex-wrap text-sm gap-2 my-1">
                                <li className="flex items-center gap-2">
                                    <span>{gig.date ?? "Неизвестна дата"}, </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>{gig.time ?? "Неизвестен час"}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>{gig.fee ?? "Неизвестен вход"}</span>
                                </li>
                            </ul>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Affiche