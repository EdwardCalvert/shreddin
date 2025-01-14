import axios from 'axios';

function getUrl() { 
    if(import.meta.env.VITE_API_SOURCE){ 
        return import.meta.env.VITE_API_SOURCE
    }
    return 'https://shreddin-api.coolify.edcalvert.net'
}

const BASE_URL = getUrl();



export default axios.create({
    baseURL: BASE_URL,
    withCredentials : true
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})