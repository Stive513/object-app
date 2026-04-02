import axios from "axios";
import io from "socket.io-client";

export const API = "http://localhost:4000";

export const socket = io(API);

export const api = axios.create({
  baseURL: API,
});