import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://192.168.31.229:5000/api/v1' // localhost
  : '';

axios.defaults.baseURL = baseURL;

axios.setToken = (token) => {
  axios.defaults.headers.common.Authorization = token;
};

axios.removeToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

// axios.defaults.withCredentials = true; // for cookies

// const token = sessionStorage.getItem('access_token');

// if (token) {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// }

export default axios;
