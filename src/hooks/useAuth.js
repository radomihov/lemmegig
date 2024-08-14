import {login, register, logout} from "../api/auth-api.js";
import {useAuthContext} from "../contexts/AuthContext.jsx";

export function useLogin() {
    const {changeAuthState} = useAuthContext();

    const loginHandler = async (email, password) => {
        const { password: _, ...authData} = await login(email, password)
        changeAuthState(authData);
        return authData;
    }

    return loginHandler;
}

export function useRegister() {
    const {changeAuthState} = useAuthContext();

    const registerHandler = async (name, email, password) => {
        const { password: _, ...authData} = await register(name, email, password);

        changeAuthState(authData);
        return authData;
    }

    return registerHandler;
}

export function useLogout() {
    const {accessToken, changeAuthState} = useAuthContext();

    const logoutHandler = async () => {
        await logout(accessToken);
        changeAuthState({});
    }

    return logoutHandler;
}

