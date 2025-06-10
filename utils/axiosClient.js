import axios from "axios";
import { API_BASE_URL, API_TIMEOUT } from "../constants/appContants";

export const getToken = () => {
  return "Dummy_Token";
};

export const getApiClient = ({ auth } = { auth: true }) => {
  const client = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: {
      "Content-Type": "application/json"
    }
  });

  client.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      const configIntercepted = { ...config };
      if (auth) {
        const AUTH_TOKEN = getToken();
        configIntercepted.headers.set("Authentication", `Bearer ${AUTH_TOKEN}`);
      }
      console.log("Request Interceptor...");

      return configIntercepted;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  client.interceptors.response.use(
    function(response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log("====================================");
      console.log("Response Interceptor....");
      console.log("====================================");
      return response;
    },
    function(error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return client;
};
