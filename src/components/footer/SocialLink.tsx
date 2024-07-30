import {Link} from "react-router-dom";

type SocialLinkProps = {
    icon: string;
    link: string;
};

function SocialLink({icon, link}: SocialLinkProps) {

    return(
        <Link to={link}>
            <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
            >
                <i className={`flex fab ${icon}`}></i>
            </button>
        </Link>
    );
}

export default SocialLink