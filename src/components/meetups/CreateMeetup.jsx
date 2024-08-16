import {useState} from "react";
import {useCreateMeetup} from "../../hooks/useMeetups.js";
import {useForm} from "../../hooks/useForm.js";
import {useNavigate, useParams} from "react-router-dom"
import {useGetMeetupOptions} from "../../hooks/useOptions.js";

const initialValues = {
    type: null,
    venueId: null,
    artistId: null,
    start: null,
    end: null,
};

export default function CreateMeetup() {
    const {gigId} = useParams();
    const {typeOptions, artistOptions, venueOptions} = useGetMeetupOptions(gigId);
    const [error, setError] = useState('');
    const create = useCreateMeetup();
    const navigate = useNavigate();


    const createMeetupHandler = async ({gigId, venueId, start, end, type}) => {

        if (!venueId) {
            setError("Не e избрано място");
            return;
        }
        if (!start) {
            setError("Не e избрано начало");
            return;
        }
        if (!end) {
            setError("Не e избран край");
            return;
        }
        if (!type) {
            setError("Не e избран тип среща");
            return;
        }

        try {
            await create(gigId, venueId, start, end, type);
            navigate(`/gigs/${gigId}`);
        } catch (err) {
            if (err.message) {
                setError(err.message);
            } else {
                setError("Невъзможно създаване.")
            }
        }
    };

    const {values, changeHandler, submitHandler} =
        useForm(initialValues, createMeetupHandler);

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Създай среща
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button">Тип среща
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div id="dropdown"
                                 className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButton">
                                    {typeOptions?.map((type) => (
                                        <li key={type.id}>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{type.name}</a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <br/>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button">Място
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <div id="dropdown"
                                 className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButton">
                                    {venueOptions?.map((venue) => (
                                        <li key={venue.id}>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{venue.name}</a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <br/>
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="button">Артист
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>

                            <div id="dropdown"
                                 className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDefaultButton">
                                    {artistOptions?.map((artist) => (
                                        <li key={artist.id}>
                                            <a href="#"
                                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{artist.name}</a>
                                        </li>
                                    ))}

                                </ul>
                            </div>

                            {error && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span
                                    className="font-medium">{error}</span>
                                </p>
                            )}
                            <button type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Създай
                                среща
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}