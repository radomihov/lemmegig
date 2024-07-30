import FooterNavItem from "./FooterNavItem.tsx";
import SocialLink from "./SocialLink.tsx";

function Footer() {
    return (
        <>
            <footer className="relative bg-gray-300 pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{height: "80px"}}
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
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold">
                                Свържете се с нас!
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-700">
                                Намерете ни в социалните мрежи, ще отговорим, когато имаме време... че ТРЯБВА И ДА СВИРИМ!
                            </h5>
                            <div className="mt-6">
                                <SocialLink icon={"fa-facebook-square"} link={"https://www.facebook.com/radomihov"}/>
                                <SocialLink icon={"fa-github"} link={"https://github.com/radomihov"}/>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Връзки
                </span>
                                    <ul className="list-unstyled">
                                        <FooterNavItem name={"За нас"} link={"/about"}/>
                                        <FooterNavItem name={"Афиш"} link={"/affiche"}/>
                                        <FooterNavItem name={"Контакт"} link={"/contact"}/>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Други ресурси
                </span>
                                    <ul className="list-unstyled">
                                        <FooterNavItem name={"Ultimate Guitar"}  link={"https://www.ultimate-guitar.com/"}/>
                                        <FooterNavItem name={"Акордите"} link={"https://akordite.com/"}/>
                                        <FooterNavItem name={"Споделено хваление"}  link={"https://spodelenohvalenie.com/"}/>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-400"/>
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-600 font-semibold py-1">
                                Copyright © {new Date().getFullYear()}{" "}LemmeGIG by{" "}
                                <a
                                    href="https://radomihov.com"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Rado Mihov
                                </a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer