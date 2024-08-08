import * as request from './requester';
import {BASE_URL} from "./requester";

export const login = async (email, password)=> {
      return await request.get(`${BASE_URL}/login`, {email, password});
}