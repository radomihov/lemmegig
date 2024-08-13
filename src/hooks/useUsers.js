import {useState, useEffect} from "react";

import usersAPI from "../api/users-api.js";

export function useGetCurrUser() {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        usersAPI.getCurrent()
            .then((result => {
                setUser(result)
                setIsLoading(false)
            }));
    }, []);

    return {user, setUser, isLoading};
}