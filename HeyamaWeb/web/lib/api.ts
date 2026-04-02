import axios from "axios";
import io from "socket.io-client";

export const API = "https://object-app-1.onrender.com/";

export const socket = io(API);

export const api = axios.create({
  baseURL: API,
});
