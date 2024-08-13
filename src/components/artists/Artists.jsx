import {useGetAllArtists} from "../../hooks/useArtists.js";
import {Spinner} from "flowbite-react";
import {ArtistCard} from "./ArtistCard.jsx";
import {CreateArtistCard} from "./CreateArtistCard.jsx";


function Artists() {
    const {artists, isLoading} = useGetAllArtists();

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                {isLoading ? (
                    <div className="flex justify-center items-center pt-20 pb-20">
                        <Spinner size="lg"/>
                    </div>
                ) : artists?.length === 0 ? (
                    <div>
                        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Моите
                                артисти</h2>
                            <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">Все още
                                нямате
                                артист. Направете първия си артист.</p>
                        </div>
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            <CreateArtistCard></CreateArtistCard>
                        </div>
                    </div>

                ) : (
                    <div>
                        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Моите
                                артисти</h2>
                            <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">В момента
                                участваш
                                като музикант, автор, композитор или друг талант в следните артисти. Кликни на някои от
                                тях,
                                за да видиш детайли и да ги редактираш, или създай нов.
                                Аристите са видими за други посетители на сайта (в афиша), едва когато ги добавиш в
                                участие
                                наживо (не
                                репетиция).</p>
                        </div>
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                            <CreateArtistCard></CreateArtistCard>
                            {artists?.map((artist) => (
                                <ArtistCard artist={artist} key={artist.id}></ArtistCard>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Artists;