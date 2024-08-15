import * as request from './requester';
import {BASE_URL} from "./requester";

export const getAll = () => request.get(`${BASE_URL}/artists`);
export const getOne = (artistId) => request.get(`${BASE_URL}/artists/${artistId}`);
export const create = (name, image, genres, place, bio) => request.post(`${BASE_URL}/artists`, {name, image, genres, place, bio} );
export const del = (artistId) => request.del(`${BASE_URL}/artists/${artistId}`);
export const edit = (artistId, name, image, genres, place, bio) => request.put(`${BASE_URL}/artists/${artistId}`, {name, image, genres, place, bio});

const artistsAPI = {
    getAll,
    getOne,
    create,
    del,
    edit
};

export default artistsAPI;
