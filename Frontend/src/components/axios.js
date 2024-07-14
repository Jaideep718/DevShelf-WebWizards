import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://devshelf-webwizards-backend.onrender.com',
  baseURL: process.env.REACT_APP_BACKEND_URL,
   // Replace with your backend URL
});

export default api;