// src/hooks/useApi.js
import axios from 'axios';
import { useMemo } from 'react';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useApi = () => {
  return useMemo(
    () => ({
      get: (endpoint, config = {}) => axiosInstance.get(endpoint, config),
      post: (endpoint, data, config = {}) => axiosInstance.post(endpoint, data, config),
      put: (endpoint, data, config = {}) => axiosInstance.put(endpoint, data, config),
      del: (endpoint, config = {}) => axiosInstance.delete(endpoint, config),
    }),
    []
  );
};