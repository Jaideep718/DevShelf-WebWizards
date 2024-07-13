import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devshelf-webwizards-backend.onrender.com', // Replace with your backend URL
});

export default api;