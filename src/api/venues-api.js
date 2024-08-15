import * as request from './requester';
import {BASE_URL} from "./requester";

export const getAll = () => request.get(`${BASE_URL}/venues`);
export const getOne = (venueId) => request.get(`${BASE_URL}/venues/${venueId}`);

export const create = (name, image, address, phone, email, description) => request.post(`${BASE_URL}/venues`, {name, image, address, phone, email, description} );

export const del = (venueId) => request.del(`${BASE_URL}/venues/${venueId}`);
export const edit = (venueId, name, image, address, phone, email, description) => request.put(`${BASE_URL}/venues/${venueId}`,{name, image, address, phone, email, description}  );

const venuesAPI = {
    getAll,
    getOne,
    create,
    del,
    edit
};

export default venuesAPI;
