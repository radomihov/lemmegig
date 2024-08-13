"use client";

import {Link} from "react-router-dom";
import noImage from '../../assets/img/no-image-svgrepo-com.svg';

export function GigCard({gig}) {
    return (
        <Link to={`/gigs/${gig?.id}`} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <img className=" max-w-40 max-h-40 rounded-lg sm:rounded-none sm:rounded-l-lg"
                 src={gig?.image ?? noImage}
                 alt="снимка"/>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{gig?.name}
                </h3>
                <span className="text-gray-500 dark:text-gray-400">{gig?.date ?? "без дата"}, {gig?.time ?? "без час"}</span>
                <div className="text-gray-500 dark:text-gray-400">{gig?.artistNames ?? "без артисти"}</div>
                <div className="text-gray-500 dark:text-gray-400">{gig?.venueNames ?? "без място"} / Вход: {gig?.fee ?? "не се знае"}</div>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{gig?.description ? gig?.description.substring(0, 100) : "Няма описание"} ... </p>
            </div>
        </Link>
    );
}
