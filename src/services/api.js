import axios from 'axios';

//  BASE DA URL: https://api.themoviedb.org/3/
//  URL DA API: /movie/top_rated?api_key=5e0d83d837d294a1d759c7ea46f7cf13&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;