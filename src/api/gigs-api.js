import * as request from './requester';
import {BASE_URL} from "./requester";

export const getAll = () => request.get(`${BASE_URL}/gigs`);
export const getOne = (gigId) => request.get(`${BASE_URL}/gigs/${gigId}`);
export const create = (name, description, fee, is_public, image) => request.post(`${BASE_URL}/gigs`, {name, description, fee, is_public, image} );
export const del = (gigId) => request.del(`${BASE_URL}/gigs/${gigId}`);
export const edit = (gigId, name, description, fee, is_public, image) => request.put(`${BASE_URL}/gigs/${gigId}`, {name, description, fee, is_public, image});
export const getAllPublic = () => request.get(`${BASE_URL}/affiche`);
export const getOnePublic = (gigId) => request.get(`${BASE_URL}/affiche/${gigId}`);
export const getOneWithUserData = (gigId) => request.get(`${BASE_URL}/gigs/${gigId}/user`);

const gigsAPI = {
    getAll,
    getOne,
    create,
    del,
    edit,
    getAllPublic,
    getOnePublic,
    getOneWithUserData
};

export default gigsAPI;