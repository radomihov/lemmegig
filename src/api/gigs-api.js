import * as request from './requester';
import {BASE_URL} from "./requester";

export const getAll = () => request.get(`${BASE_URL}/gigs`);

export const getOne = (gigId) => request.get(`${BASE_URL}/gigs/${gigId}`);

const gigsAPI = {
    getAll,
    getOne
};

export default gigsAPI;
