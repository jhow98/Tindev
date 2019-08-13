import axios from 'axios';

const api = axios.create({
    //Using laptop's ip because of android emulator
    baseURL: 'http://192.168.15.18:3333'
});

export default api;
