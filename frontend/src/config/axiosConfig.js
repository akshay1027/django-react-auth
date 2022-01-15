/* eslint-disable prefer-const */
/* eslint-disable camelcase */
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

// const BASE_URL = '';
const BASE_URL = 'http://localhost:8000/';
let authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
const api = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${authTokens?.access}` }
    // timeout: 30000
});

// api.interceptors.request.use(async (req) => {
//     if (!authTokens) {
//         authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
//         req.headers.Authorization = `Bearer ${authTokens?.access}`;
//     }

//     const user = jwt_decode(authTokens.access);
//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
//     console.log('IsExpired', isExpired);
//     if (!isExpired) return req;

//     // if token is expired
//     const response = await axios.post(`${BASE_URL}api/token/refresh/`, {
//         refresh: authTokens.refresh
//     });

//     localStorage.setItem('authTokens', JSON.stringify(response.data));
//     req.headers.Authorization = `Bearer ${response.data.access}`;
//     return req;
// });

export default api;
