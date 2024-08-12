import {Link} from "react-router-dom";
function NavItem({name, link}) {

    return (
        <Link to={link}
                className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        >
            <li className="flex items-center" key={name}>
                <i className="text-gray-500"/>{" "}
                {name}
            </li>
        </Link>
    );
}

export default NavItem
