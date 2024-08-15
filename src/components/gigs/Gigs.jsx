"use client";
import {useGetAllGigs} from "../../hooks/useGigs.js";
import {GigCard} from "./GigCard.jsx";
import {CreateGigCard} from "./CreateGigCard.jsx";
import {Spinner} from "flowbite-react";

function Gigs() {
    const {gigs, isLoading} = useGetAllGigs();
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                {isLoading ? (
                    <div className="flex justify-center items-center pt-20 pb-20">
                        <Spinner size="lg"/>
                    </div>
                ) : gigs?.length === 0 ? (
                    <div>
                        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Моите
                                участия</h2>
                            <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">Все още
                                нямаш участия.</p>
                            <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">
                                Създай участие и покани артисти и собственици на заведения, да вземат участие в него.</p>

                        </div>
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            <CreateGigCard></CreateGigCard>
                        </div>
                    </div>

                ) : (
                    <div>
                        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Моите
                                участия</h2>
                            <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">В имаш
                                участия с някой от твоите артисти.
                                Кликни на някои от тях, за да видиш детайли и да ги редактираш, или създай ново.
                                Публичните участия са видими и в афиша.</p>
                        </div>
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            <CreateGigCard></CreateGigCard>
                            {gigs?.map((gig) => (
                                <GigCard gig={gig} key={gig.id}></GigCard>
                            ))}
                        </div>
                    </div>
                    )}
            </div>
        </section>
    );
}

export default Gigs