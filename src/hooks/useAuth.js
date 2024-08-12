import {login, register} from "../api/auth-api.js";
import {useContext} from "react";

import {AuthContext} from "../contexts/AuthContext.js";

export function useLogin() {
    const {changeAuthState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const { password: _, ...authData} = await login(email, password)
        changeAuthState(authData);

        return authData;
    }

    return loginHandler;
}

export function useRegister() {
    const {changeAuthState} = useContext(AuthContext);

    const registerHandler = async (name, email, password) => {
        const { password: _, ...authData} = await register(name, email, password);

        changeAuthState(authData);
        return authData;
    }

    return registerHandler;
}