import axios from "axios";

export const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 10000,
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);