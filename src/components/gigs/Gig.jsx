import noImage from '../../assets/img/no-image-svgrepo-com.svg';
import {Link, useParams} from "react-router-dom";
import {Spinner, Table} from "flowbite-react";
import {useDeleteGig, useGetOneGig} from "../../hooks/useGigs.js";

export default function Gig() {
    const {id} = useParams();
    const {gig, isLoading, isOwner, isParticipant} = useGetOneGig(id);
    const del = useDeleteGig();

    const deleteBtnHandler = () => {
        del(id);
    }

    return (
        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div
                    className="flow-root max-w-4xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                    {isLoading ? (
                        <div className="flex justify-center items-center pt-20 pb-20">
                            <Spinner size="lg"/>
                        </div>
                    ) : (
                        <div >
                            <div className="flex justify-center items-center pt-20 pb-20">
                                <figure className="max-w-lg">
                                    <img className="h-auto rounded-lg m-5" src={gig?.image ?? noImage}
                                         alt={gig?.name}/>
                                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                                    </figcaption>
                                </figure>
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 m-10">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        {gig?.name}
                                    </h1>
                                    <div className="space-y-4 md:space-y-6">
                                        <p className=" text-gray-500 dark:text-gray-400"><b>Кой:</b> {gig?.artistNames}
                                        </p>
                                        <p className=" text-gray-500 dark:text-gray-400"><b>Къде:</b> {gig?.venueNames}
                                        </p>
                                        <p className=" text-gray-500 dark:text-gray-400">
                                            <b>Кога:</b> {gig?.date} / {gig?.time}</p>
                                        <p className=" text-gray-500 dark:text-gray-400"><b>Колко:</b> {gig?.fee}</p>
                                        <p className=" text-gray-500 dark:text-gray-400">
                                            <b>Какво:</b> {gig?.description}
                                        </p>
                                    </div>
                                    {isOwner && (
                                        <div>
                                            <Link to={`/gigs/${gig?.id}/edit`} className="flex flex-col px-10 py-1 mx-auto ">
                                                <button type="button"
                                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                                >Редактирай
                                                </button>
                                            </Link>
                                            <Link to={`/gigs`} className="flex flex-col px-10 py-1 mx-auto ">
                                                <button type="button"
                                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                        onClick={deleteBtnHandler}>Изтрий
                                                </button>
                                            </Link>
                                        </div>)}
                                </div>
                            </div>

                            {( isParticipant || isOwner ) && (
                                <div>
                                    <Link to={`/meetups/create/${gig?.id}`}
                                          className="flex flex-col px-10 py-1 mx-auto ">
                                        <button type="button"
                                                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Добави среща
                                        </button>
                                    </Link>
                                    <Table>
                                        <Table.Head>
                                            <Table.HeadCell>
                                                <span className="sr-only">Звездичка</span>
                                            </Table.HeadCell>
                                            <Table.HeadCell>Дата</Table.HeadCell>
                                            <Table.HeadCell>Час</Table.HeadCell>
                                            <Table.HeadCell>Участие</Table.HeadCell>
                                            <Table.HeadCell>Място</Table.HeadCell>
                                            <Table.HeadCell>
                                                <span className="sr-only">Виж</span>
                                            </Table.HeadCell>
                                        </Table.Head>
                                        <Table.Body className="divide-y">
                                            {gig.meetups?.map((meetup) => (
                                                <Table.Row
                                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                                    key={meetup?.id}
                                                >
                                                    <Table.Cell>
                                                        <svg
                                                            className="w-5 h-5 text-gray-800 dark:text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill={meetup?.type === 1 ? "none" : "currentColor"}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                            />
                                                        </svg>
                                                    </Table.Cell>
                                                    <Table.Cell>{meetup?.date}</Table.Cell>
                                                    <Table.Cell>{meetup?.start} - {meetup?.end}</Table.Cell>
                                                    <Table.Cell
                                                        className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                        {meetup?.gig}
                                                    </Table.Cell>
                                                    <Table.Cell>{meetup?.venue}</Table.Cell>
                                                    <Table.Cell>
                                                        <a
                                                            href={`/meetups/${meetup.id}`}
                                                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                                        >
                                                            Виж
                                                        </a>
                                                    </Table.Cell>
                                                </Table.Row>
                                            ))}
                                        </Table.Body>
                                    </Table>
                                </div>
                            )}
                        </div>)}
                </div>
            </div>
        </section>
    );
}