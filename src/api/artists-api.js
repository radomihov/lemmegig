import * as request from './requester';
import {BASE_URL} from "./requester";

export const getAll = () => request.get(`${BASE_URL}/artists`);
export const getOne = (artistId) => request.get(`${BASE_URL}/artists/${artistId}`);

const artistsAPI = {
    getAll,
    getOne
};

export default artistsAPI;
