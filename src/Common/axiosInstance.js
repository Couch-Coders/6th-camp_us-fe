import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    Authorization: '',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    token
      ? (config.headers['Authorization'] = localStorage.getItem('token'))
      : (config.headers['Authorization'] = '');
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default axiosInstance;
