import * as request from './requester';
import {BASE_URL} from "./requester";

export const getAll = () => request.get(`${BASE_URL}/meetups`);
export const getOne = (meetupId) => request.get(`${BASE_URL}/meetups/${meetupId}`);
export const create = (gig_id, venue_id, start, end, type) => request.post(`${BASE_URL}/meetups`, {gig_id, venue_id, start, end, type} );
export const del = (meetupId) => request.del(`${BASE_URL}/meetups/${meetupId}`);
export const edit = (meetupId, gig_id, venue_id, start, end, type) => request.put(`${BASE_URL}/meetups/${meetupId}`, {gig_id, venue_id, start, end, type});

const meetupsAPI = {
    getAll,
    getOne,
    create,
    del,
    edit
};

export default meetupsAPI;