import * as request from './requester';
import {BASE_URL} from "./requester";

export const getAll = () => request.get(`${BASE_URL}/meetups`);
export const getOne = (meetupId) => request.get(`${BASE_URL}/meetups/${meetupId}`);

const meetupsAPI = {
    getAll,
    getOne
};

export default meetupsAPI;
