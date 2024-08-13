import * as request from './requester';
import {BASE_URL} from "./requester";

export const login = (email, password) =>  request.post(`${BASE_URL}/login`, {email, password});

export const register = (name, email, password) =>  request.post(`${BASE_URL}/register`, {name, email, password});

export const logout = () =>  request.post(`${BASE_URL}/logout`);
