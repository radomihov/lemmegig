import FooterNavItem from "./FooterNavItem.jsx";
import SocialLink from "./SocialLink.jsx";
import {Link} from "react-router-dom";

import logo from '../../assets/img/logo.png';

function Footer() {
    return (
        <>
            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="/">
                                <img src={logo} alt="LemmeGIG Logo" style={{ height: '50px' }} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Връзки</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <FooterNavItem name={"За нас"} link={"/about"}/>
                                    <FooterNavItem name={"Афиш"} link={"/affiche"}/>
                                    <FooterNavItem name={"Контакт"} link={"/contact"}/>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Други
                                    връзки</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    <FooterNavItem name={"Ultimate Guitar"}
                                                   link={"https://www.ultimate-guitar.com/"}/>
                                    <FooterNavItem name={"Акордите"} link={"https://akordite.com/"}/>
                                    <FooterNavItem name={"Споделено хваление"}
                                                   link={"https://spodelenohvalenie.com/"}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link
                            to={"http://www.radomihov.com"} className="hover:underline">Rado Mihov</Link> All Rights Reserved.</span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <SocialLink icon={"fa-facebook"} link={"https://www.facebook.com/radomihov"}/>
                            <SocialLink icon={"fa-github"} link={"https://github.com/radomihov"}/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer