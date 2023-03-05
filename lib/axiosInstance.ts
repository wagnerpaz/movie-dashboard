import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  params: { api_key: process.env.API_KEY },
});

export default axiosInstance;
