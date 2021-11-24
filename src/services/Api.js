import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:3333/',
    //headers: { "content-type": "application/x-www-form-urlencoded",  Accept: "application/json" }
    
});

export default api;