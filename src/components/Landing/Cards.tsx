function Cards(){
    return (
        <section className="pb-20 bg-gray-300 -mt-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div
                                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                    <i className="fas fa-award"></i>
                                </div>
                                <h6 className="text-xl font-semibold">Репетиции</h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    Организирайте репетиции с план на времето, списък с песни, споделени файлове.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 text-center">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div
                                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                    <i className="fas fa-retweet"></i>
                                </div>
                                <h6 className="text-xl font-semibold">
                                    Участия наживо
                                </h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    Гледайте един и същи списък с песни, промени в движение - видни за всички веднага.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                        <div
                            className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                            <div className="px-4 py-5 flex-auto">
                                <div
                                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                    <i className="fas fa-fingerprint"></i>
                                </div>
                                <h6 className="text-xl font-semibold">
                                    Календар (Очаквайте скоро)
                                </h6>
                                <p className="mt-2 mb-4 text-gray-600">
                                    Следете репетициите с всичките си банди - с напомняния и присъствен списък.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Cards