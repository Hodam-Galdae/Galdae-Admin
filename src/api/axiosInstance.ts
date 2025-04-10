import axios from 'axios';

export const API_BASE_URL = 'http://15.164.118.59'; // 백엔드 API 주소

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000, // 요청 제한 시간
});

axiosInstance.interceptors.request.use(
  async config => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => Promise.reject(error),
);

export default axiosInstance;
