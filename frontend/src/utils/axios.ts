import axios from "axios";

export const CLIENT_API = axios.create({
    baseURL: "http://localhost:3000"
})