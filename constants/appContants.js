export const CONFIG = { JWT: "", REFRESH_JWT: '' };
export const AUTH_API_BASE_URL = "https://dummyjson.com";

export const PRODUCT_API_BASE_URL = "https://fakestoreapi.in";
export const API_TIMEOUT = 30000; //MilliSeconds

export const SESSION_KEYS = Object.freeze({
  AUTH: "auth"
});
export const apiEndpoints = Object.freeze({
  LOGIN_URL: "/auth/login",
  GET_PRODUCTS: "/api/products",
  GET_CURRENT_USER: "/auth/me",
  REFRESH: "/auth/refresh"
});

export const Service = Object.freeze({
  AUTH: 0,
  PRODUCT: 1
});
