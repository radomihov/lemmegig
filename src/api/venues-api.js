import * as request from './requester';
import {BASE_URL} from "./requester";

export const getAll = () => request.get(`${BASE_URL}/venues`);
export const getOne = (artistId) => request.get(`${BASE_URL}/venues/${artistId}`);

export const create = (name, image, address, phone, email, description) => request.post(`${BASE_URL}/venues`, {name, image, address, phone, email, description} );

const venuesAPI = {
    getAll,
    getOne,
    create
};

export default venuesAPI;
