import axios from 'axios';

axios.defaults.withCredentials = true;

const customAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    timeout: 15000,
});

export default customAxios;
