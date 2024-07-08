import { storage } from "@/App";
import axios, { AxiosError } from "axios";

const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ''}/`;

// Create a new Axios instance with a base URL and default headers
const instance = axios.create({
  baseURL: prefixUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to add authentication headers if a token is present
instance.interceptors.request.use(
  (config) => {
    // You can modify the request config here, e.g., add authentication headers
    const token = storage.getString("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle response data and token refreshing
instance.interceptors.response.use(
  (response) => {
    // You can modify the response data here, e.g., handling pagination
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      // If token refresh fails, redirect to the login page
      storage.delete("accessToken")
    }

    return Promise.reject(error as AxiosError);
  }
);

export default instance;
