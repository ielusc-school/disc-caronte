import axios from 'axios';
import provedor from '@/provedor';

const http = axios.create({
  baseURL: 'http://localhost:9000/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use( function(config) {
  // const token = localStorage.getItem('token');
  const token = provedor.state.token;
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function(erro) {
  return Promise.reject(erro);
});


export default http;

