import {useContext, useState} from "react";
import NavItem from "./NavItem.jsx";
import {Link} from "react-router-dom";
import logo from '../../assets/img/logo.png';
import {AuthContext} from "../../contexts/AuthContext.js";

function Header({transparent}) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <header>
            <nav
                className= "relative bg-white shadow-lg flex flex-wrap items-center justify-between px-2 py-3 "
            >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/" className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap">
                            <img src={logo} alt="LemmeGIG Logo" style={{height: '20px'}}/>
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="text-gray-800 fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                            (navbarOpen ? " block rounded shadow-lg" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <NavItem transparent={transparent} name={"За нас"} link={"/about"}/>
                            <NavItem transparent={transparent} name={"Афиш"} link={"/affiche"}/>
                            <NavItem transparent={transparent} name={"Участия"} link={"/gigs"}/>
                            <NavItem transparent={transparent} name={"Контакт"} link={"/contact"}/>
                        </ul>

                        {isAuthenticated ?
                            (
                                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                    <NavItem transparent={transparent} name={"Регистрация"} link={"/registration"}/>
                                </ul>
                            ) : (
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <NavItem transparent={transparent} name={"Регистрация"} link={"/registration"}/>
                                <NavItem transparent={transparent} name={"Вход"} link={"/login"}/>
                            </ul>
                    )
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header