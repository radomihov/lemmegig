"use client";

import {Link} from "react-router-dom";
import noImage from '../../assets/img/no-image-svgrepo-com.svg';

export function MeetupCard({artist}) {
    return (
        <Link to={`/artists/${artist?.id}`} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <img className=" max-w-40 max-h-40 rounded-lg sm:rounded-none sm:rounded-l-lg"
                 src={artist?.image ?? noImage}
                 alt="снимка"/>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{artist?.name}
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{artist?.place ?? "без локация"}</span>
                <div className="text-gray-500 dark:text-gray-400">{artist?.genres ?? "без жанр"}</div>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{artist?.bio ? artist?.bio.substring(0, 100) : "Няма биография"} ... </p>
            </div>
        </Link>
    );
}
