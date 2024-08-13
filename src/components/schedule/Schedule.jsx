"use client";

import { Table, Spinner } from "flowbite-react";
import { useGetAllMeetups } from "../../hooks/useMeetups.js";

function Schedule() {
    const { meetups, isLoading} = useGetAllMeetups();

    return (
        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">График</h2>
                    <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400"> Тук ще виждаш следващите репетиции ("куха" звездичка) или участия ("пълна" звездичка). Клкни на "Виж", за да видиш детайли и да редактираш. </p>
                </div>
                <div className="flow-root max-w-4xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                    {isLoading ? (
                        <div className="flex justify-center items-center pt-20 pb-20">
                            <Spinner size="lg"/>
                        </div>
                    ) : meetups?.length === 0 ? (
                        <div className="max-w-3xl mx-auto text-center pt-20 pb-20">
                            <h2 className="text-3xl leading-tight tracking-tight text-gray-900 dark:text-white">
                                Нямате предстоящи репетиции / участия.
                            </h2>
                        </div>
                    ) : (
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
                                {meetups?.map((meetup) => (
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
                    )}
                </div>
            </div>
        </section>
    );
}

export default Schedule;
