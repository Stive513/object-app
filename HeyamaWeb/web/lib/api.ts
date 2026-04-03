import axios from "axios";
import { io } from "socket.io-client";

const API = process.env.NEXT_PUBLIC_API_URL;

export const socket = API
  ? io(API)
  : null;
