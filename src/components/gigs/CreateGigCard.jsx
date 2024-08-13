
"use client";

import {Link} from "react-router-dom";
import newEvent from '../../assets/img/calendar-add-svgrepo-com.svg';
export function CreateGigCard() {
    return (
        <Link to="/gigs/create"
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <img className="w-[80px] h-[80px] text-gray-800 dark:text-white m-10"
                 src={newEvent}
                 alt="снимка"/>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Създай ново участие</h3>
            </div>
        </Link>
    );
}
