function Intro() {
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{
            minHeight: "75vh"
        }}>
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                 style={{
                     backgroundImage: "url('https://images.unsplash.com/photo-1519326773765-3ae3b02c44cc?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1267&q=80')"
                 }}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div className="pr-12">
                            <h1 className="text-white font-semibold text-5xl">
                                ДАВАЙ ДА СВИРИМ!
                            </h1>
                            <p className="mt-4 text-lg text-gray-300">
                                Системата, от която имате нужда за вашите репетиции и изпълнения наживо!
                            </p>
                            <p className="mt-4 text-lg text-gray-300">Ние артистите
                                сме завеяни - оставете на lemmeGIG да се грижи за организацията, а ние ДА СВИРИМ
                                НАЙ-НАКРАЯ!
                            </p>
                        </div>
                    </div>

                </div>
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
        </div>
    )
}

export default Intro