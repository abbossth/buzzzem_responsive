import axios from "axios";
import { QueryClient } from "react-query";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const errorHandler = (error) => {
  return Promise.reject(error.response);
};

request.interceptors.response.use((response) => response.data, errorHandler);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
