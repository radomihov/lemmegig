"use client";

import {Link} from "react-router-dom";
import noImage from '../../assets/img/no-image-svgrepo-com.svg';

export function VenueCard({venue}) {
    return (
        <Link to={`/venues/${venue?.id}`} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <img className=" max-w-40 max-h-40 rounded-lg sm:rounded-none sm:rounded-l-lg"
                 src={venue?.image ?? noImage}
                 alt="снимка"/>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {venue?.name}
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{venue?.address ?? "без адрес"}</span>
                <div className="text-gray-500 dark:text-gray-400">{venue?.phone ?? "без телефон"} / {venue?.email ?? "без имейл"} </div>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{venue?.description ? venue?.description.substring(0, 100) : "Няма описание"} ... </p>
            </div>
        </Link>
    );
}
