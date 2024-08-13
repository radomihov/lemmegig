import {useState, useEffect} from "react";

import usersAPI from "../api/users-api.js";

export function useGetAllUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersAPI.getAll()
            .then(result => setUsers(result.data));
    }, []);
    return [users, setUsers];
}
export function useGetOneUser(userId) {
    const [user, setUser] = useState();

    useEffect(() => {
        usersAPI.getOne(userId)
            .then((result => setUser(result)));
    }, [userId]);

    return [user, setUser];
}

export function useGetCurrUser() {
    const [user, setUser] = useState();

    useEffect(() => {
        usersAPI.getCurrent()
            .then((result => setUser(result)));
    }, []);

    return [user, setUser];
}