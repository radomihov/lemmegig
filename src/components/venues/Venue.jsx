import {useDeleteVenue, useGetOneVenue} from "../../hooks/useVenues.js";
import noImage from '../../assets/img/no-image-svgrepo-com.svg';
import {Link, useParams} from "react-router-dom";
import {Spinner} from "flowbite-react";

export default function Venue() {
    const {id} = useParams();
    const {venue, isLoading, isOwner} = useGetOneVenue(id);
    const del = useDeleteVenue();

    const deleteBtnHandler = () => {
        del(id);
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    {isLoading ? (
                        <div className="flex justify-center items-center pt-20 pb-20">
                            <Spinner size="lg"/>
                        </div>
                    ) : (
                        <div>
                            <figure className="max-w-lg">
                                <img className="h-auto max-w-40 rounded-lg m-5" src={venue?.image ?? noImage} alt={venue?.name}/>
                                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                                </figcaption>
                            </figure>
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    {venue?.name}
                                </h1>
                                <div className="space-y-4 md:space-y-6">
                                    <p className=" text-gray-500 dark:text-gray-400"><b>Адрес:</b> {venue?.address}</p>
                                    <p className=" text-gray-500 dark:text-gray-400"><b>Телефон:</b> {venue?.phone}</p>
                                    <p className=" text-gray-500 dark:text-gray-400"><b>Имейл:</b> {venue?.email}</p>
                                    <p className=" text-gray-500 dark:text-gray-400"><b>Биография:</b> {venue?.description}</p>
                                </div>
                            </div>
                            {isOwner && (
                            <div>
                                <Link to={`/venues/${venue?.id}/edit`} className="flex flex-col px-10 py-1 mx-auto ">
                                    <button type="button"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >Редактирай
                                    </button>
                                </Link>
                                <Link to={`/venues`} className="flex flex-col px-10 py-1 mx-auto ">
                                    <button type="button"
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            onClick={deleteBtnHandler}>Изтрий
                                    </button>
                                </Link>
                            </div>)}
                        </div>)}
                </div>
            </div>
        </section>
    );
}