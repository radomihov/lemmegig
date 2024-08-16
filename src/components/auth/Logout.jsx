import {useNavigate} from "react-router-dom";
import {useLogout} from "../../hooks/useAuth.js";

export default function Logout() {
    const logout = useLogout();
    const navigate = useNavigate();

    const logoutHandler = async (e) => {
        e.preventDefault();

        try {
            navigate('/');
            await logout();
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <form onSubmit={logoutHandler}>
            <button
                className="text-gray-800 hover:text-gray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">Изход
            </button>
        </form>
    );
}
