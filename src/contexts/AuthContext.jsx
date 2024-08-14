import {createContext, useContext} from "react";
import usePersistedState from "../hooks/usePersistedState.js";

export const AuthContext = createContext({
    user: {},
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: ( authState = {})  => null
});

export  function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth',{});

    const changeAuthState = (state) => {
        //TODO: validation
        localStorage.setItem('auth', state)
        setAuthState(state);
    }

    const contextData = {
        user: authState.user,
        accessToken: authState.token,
        isAuthenticated: !!authState.token,
        changeAuthState
    }
    return (<AuthContext.Provider value = {contextData}>
        {props.children}
            </AuthContext.Provider>
      );
}
 export function useAuthContext() {
    const authData = useContext(AuthContext);
    return authData;
}