import * as request from './requester';
import {BASE_URL} from "./requester";
export const getCurrent = () => request.get(`${BASE_URL}/user`);

const usersAPI = {
    getCurrent
};

export default usersAPI;
