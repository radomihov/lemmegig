"use client";

import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import {useGetAllGigs} from "../../hooks/useGigs.js";
function Gigs() {
    const [gigs] = useGetAllGigs();
    return (
        <div className="overflow-x-auto">
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>Име</Table.HeadCell>
                    <Table.HeadCell>Участници</Table.HeadCell>
                    <Table.HeadCell>Място</Table.HeadCell>
                    <Table.HeadCell>Дата</Table.HeadCell>
                    <Table.HeadCell>Час</Table.HeadCell>
                    <Table.HeadCell>Вход</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Детайли</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {gigs.map(gig => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={gig.id}>
                            <Table.Cell>{gig.name}</Table.Cell>
                            <Table.Cell>{gig.artistNames}</Table.Cell>
                            <Table.Cell>{gig.venueNames}</Table.Cell>
                            <Table.Cell>{gig.date}</Table.Cell>
                            <Table.Cell>{gig.time}</Table.Cell>
                            <Table.Cell>{gig.fee}</Table.Cell>
                            <Table.Cell>
                                <Link to={`/gigs/${gig.id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Виж повече
                                </Link>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default Gigs