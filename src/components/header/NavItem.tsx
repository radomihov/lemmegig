import {Link} from "react-router-dom";

type NavItemProps = {
    transparent: boolean;
    name: string;
    link: string;
};

function NavItem({transparent, name, link}: NavItemProps) {

    return (
        <Link to={link}>
            <li className="flex items-center">
                <a
                    className={
                        (transparent
                            ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                            : "text-gray-800 hover:text-gray-600") +
                        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    }
                    href={link}
                >
                    <i
                        className={
                            (transparent
                                ? "lg:text-gray-300 text-gray-500"
                                : "text-gray-500")
                        }
                    />{" "}
                    {name}
                </a>
            </li>
        </Link>
    );
}

export default NavItem
