import * as request from './requester';
import {baseUrl} from "./requester";

export const getAll = () => request.get(baseUrl + "/gigs");
export const getMine = () => request.get(baseUrl + "/gigs/mine");