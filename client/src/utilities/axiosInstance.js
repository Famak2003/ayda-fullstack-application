import axios from "axios";
import axiosRetry from "axios-retry";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

export const API_URL = "http://localhost:4500/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Called before sending the request
axiosInstance.interceptors.request.use(
  (config) => {
    // Show a loading toast
    config.withCredentials=true
    config._toastId = toast.loading("Sending request...");
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response Interceptor: Called after receiving the response
axiosInstance.interceptors.response.use(
  (response) => {
    // Dismiss the loading toast and show success
    if (response.config._toastId) {
      toast.dismiss(response.config._toastId);
      toast.success("Request completed successfully!");
    }

    return response;
  },
  (error) => {
    // Dismiss the loading toast and show an error
    if (error.config?._toastId) {
      toast.dismiss(error.config._toastId);
      toast.error(
        error.response?.data?.message || "An error occurred during the request."
      );
    }


    if (error.response?.status === 401) {
      Cookies.remove('token')
    }

    return Promise.reject(error); // Propagate the error
  }
);

// Axios Retry Configuration
// axiosRetry(axiosInstance, {
//   retries: 3, // Number of retries
//   retryDelay: axiosRetry.exponentialDelay, // Exponential delay between retries
//   shouldRetry: (error) => {
//     // Retry only on specific conditions (e.g., network errors or server errors)
//     return error.response?.status >= 500 || error.code === "ECONNABORTED";
//   },
// });

export default axiosInstance;
