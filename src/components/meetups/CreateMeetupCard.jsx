
"use client";

import {Link} from "react-router-dom";
import newArtist from '../../assets/img/new-user-svgrepo-com.svg';
export function CreateMeetupCard() {
    return (
        <Link to="/artists/create"
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <img className="w-[80px] h-[80px] text-gray-800 dark:text-white m-10"
                 src={newArtist}
                 alt="снимка"/>
            <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Създай нова среща</h3>
            </div>
        </Link>
    );
}
