import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    Authorization: '',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = localStorage.getItem('token');
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axiosInstance;
