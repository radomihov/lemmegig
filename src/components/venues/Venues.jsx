import {useGetAllVenues} from "../../hooks/useVenues.js";
import {Spinner} from "flowbite-react";
import {VenueCard} from "./VenueCard.jsx";
import {CreateVenueCard} from "./CreateVenueCard.jsx";

function Venues() {
    const {venues, isLoading} = useGetAllVenues();

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                {isLoading ? (
                    <div className="flex justify-center items-center pt-20 pb-20">
                        <Spinner size="lg"/>
                    </div>
                ) : venues?.length === 0 ? (
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Моите
                            места</h2>
                        <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">
                            Създай място, в което отговаряш за участията (като собственик, барман) и следи събитията.
                            Само заведения, в които се състоят публични участия са видими за други посетители на сайта
                            (в афиша).</p>
                    </div>
                ) : (
                    <div>
                        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Моите
                                места</h2>
                            <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">В момента
                                участваш
                                като собственик, барман, управител в следните заведения. Кликни на някои от
                                тях, за да видиш детайли и да ги редактираш, или създай ново.
                                Само заведения, в които се състоят публични участия са видими за други посетители на
                                сайта
                                (в афиша).</p>
                        </div>
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            <CreateVenueCard></CreateVenueCard>
                            {venues?.map((venue) => (
                                <VenueCard venue={venue} key={venue.id}></VenueCard>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Venues;