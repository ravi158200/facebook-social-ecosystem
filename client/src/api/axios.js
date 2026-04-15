import axios from 'axios';

const API = axios.create({
  baseURL: 'https://facebook-social-ecosystem-1.onrender.com/api',
  withCredentials: true,
});

export default API;
