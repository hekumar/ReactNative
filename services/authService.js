import { apiEndpoints, CONFIG, Service } from "../constants/appContants";
import { products } from "../data";
import { getApiClient } from "../utils/axiosClient";

export const authenticateUser = async userCred => {
  const apiClient = getApiClient({ auth: false, service: Service.AUTH });
  const response = await apiClient.post(apiEndpoints.LOGIN_URL, userCred);
  // transform logic -> create data from api response consumable by UI component
  return response.data;
};

export const getCurrentUser = async () => {
  try {
    const apiClient = getApiClient({ auth: false, service: Service.AUTH });
    const response = await apiClient.get(apiEndpoints.GET_CURRENT_USER);
    // transform logic -> create data from api response consumable by UI component
    return response.data;
    
  } catch (error) {
    // if (response.status === 401) {
      // means access token expired
      console.log("====================================", error);
      const refreshResult = await refreshACcessToken();
      console.log(refreshResult);
      console.log("====================================");
    // }
    
  }
};

// lot of other api calls, where the access token is getting used
// profile 
// order history 
// trasaction
// etc..

export const refreshACcessToken = async () => {
  const apiClient = getApiClient({ auth: true, service: Service.AUTH });
  const response = await apiClient.post(apiEndpoints.REFRESH, {
    refreshToken: CONFIG.REFRESH_JWT,
    expiresInMins: 30 // optional (FOR ACCESS TOKEN), defaults to 60
  });
  return response.data;
};
