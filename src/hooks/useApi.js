// src/hooks/useApi.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Changed from VITE_API_BASE_URL to VITE_API_URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useApi = () => {
  const get = (endpoint, config = {}) => axiosInstance.get(endpoint, config);
  const post = (endpoint, data, config = {}) => axiosInstance.post(endpoint, data, config);
  const put = (endpoint, data, config = {}) => axiosInstance.put(endpoint, data, config);
  const del = (endpoint, config = {}) => axiosInstance.delete(endpoint, config);

  return { get, post, put, del };
};