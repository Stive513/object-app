import axios from "axios";
import { io } from "socket.io-client";

export const API = process.env.NEXT_PUBLIC_API_URL;

export const socket = API
  ? io(API)
  : null;
export const api = axios.create({
  baseURL: API,
});
