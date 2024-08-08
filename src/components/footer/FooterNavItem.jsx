import {Link} from "react-router-dom";

function FooterNavItem({name, link}) {
    return (
        <Link to={link} key={name}>
            <li className="mb-4">{name}</li>
        </Link>
    );
}

export default FooterNavItem