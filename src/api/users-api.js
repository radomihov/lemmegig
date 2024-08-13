import * as request from './requester';
import {BASE_URL} from "./requester";

// export const getAll = () => request.get(`${BASE_URL}/users`);
// export const getOne = (userId) => request.get(`${BASE_URL}/users/${userId}`);

export const getCurrent = () => request.get(`${BASE_URL}/user`);

const usersAPI = {
    // getAll,
    // getOne,
    getCurrent
};

export default usersAPI;
