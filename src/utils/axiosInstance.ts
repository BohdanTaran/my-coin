import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'x-cg-demo-api-key': apiKey,
  },
  params: {
    vs_currency: 'usd',
  },
});

export default axiosInstance;
