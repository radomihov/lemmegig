import {Link} from "react-router-dom";

function SocialLink(icon, link) {

    return(
        <Link to={link}>
            <button
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                type="button"
            >
                <i className={`flex fab ${icon}`}></i>
            </button>
        </Link>
    );
}

export default SocialLink