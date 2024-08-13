import {useGetAllPublicGigs} from "../../hooks/useGigs.js";
import {Spinner} from "flowbite-react";
import {GigCard} from "../gigs/GigCard.jsx";

function Affiche() {
    const {gigs, isLoading} = useGetAllPublicGigs();

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
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Нашият културен афиш</h2>
                            <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">
                                В момента няма предстоящи събития на нашите артисти.
                            </p>
                        </div>
                    </div>

                ) : (
                    <div>
                        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                                Нашият културен афиш</h2>
                            <p className="font-light text-gray-500 lg:mb-10 sm:text-xl dark:text-gray-400">
                                Разгледайте предстоящите събития на нашите артисти.
                            </p>
                        </div>
                        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
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

export default Affiche