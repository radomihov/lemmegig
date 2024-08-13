import {useGetCurrUser} from "../../hooks/useUsers.js";
import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";

export default function Profile() {
    const [user] = useGetCurrUser();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user !== undefined) {
            setIsLoading(false);
        }
    }, [user]);

    return (
        <>
            <main className="profile-page">
                <section className="relative block" style={{height: "500px"}}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                        }}
                    >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            ></span>
                    </div>

                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{height: "70px"}}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                {isLoading ? (
                <div className="flex justify-center items-center pt-20 pb-20">
                    <Spinner size="lg"/>
                </div>
                ) : (
                <section className="relative py-2 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-1">
                                        <div className="text-center mt-12">
                                            <h3 className="text-3xl font-semibold leading-normal text-gray-800 mb-2">
                                                {user?.name}
                                            </h3>
                                            <h2>{user?.email}</h2>
                                            {/*<Link to={'/change-password'}>*/}
                                            {/*    <h2><b><u>смени парола</u></b></h2>*/}
                                            {/*</Link>*/}
                                        </div>
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {user?.gigCount}
                        </span>
                                                <span className="text-sm text-gray-500">Участия</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                         {user?.artistCount}
                        </span>
                                                <span className="text-sm text-gray-500">Артисти</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                         {user?.venueCount}
                        </span>
                                                <span className="text-sm text-gray-500">Места</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)}
            </main>
        </>
    );
}