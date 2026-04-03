import axios from "axios";
import io from "socket.io-client";

const API = process.env.NEXT_PUBLIC_API_URL;

if (!API) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export const socket = io(API, {
  transports: ["websocket", "polling"],
});
