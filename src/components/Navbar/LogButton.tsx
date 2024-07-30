type LogButtonProps = {
    transparent: boolean;
    userLoggedIn: boolean;
};


function LogButton({transparent, userLoggedIn}: LogButtonProps) {
    return (
        <li className="flex items-center">
            <button
                className={
                    (transparent
                        ? "bg-white text-gray-800 active:bg-gray-100"
                        : "bg-pink-500 text-white active:bg-pink-600") +
                    " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{transition: "all .15s ease"}}
            >
            { userLoggedIn ? "ИЗХОД" : "ВХОД"}
            </button>
        </li>
    );
}

export default LogButton