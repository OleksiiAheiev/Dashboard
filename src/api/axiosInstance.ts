import axios from "axios";
// import type { InternalAxiosRequestConfig } from 'axios';

// enum urls {

// }

const api = axios.create({
  baseURL: process.env.VITE_FIREBASE_API_KEY,
  timeout: 10000,
});

// Set required authorization header for requests.
// api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
//   if (
//     config.url &&
//     config.method === "post" &&
//     urlSkipAuth.includes(config.url)
//   ) {
//     return config;
//   }

//   const token = localStorageManager.getToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// api.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     // Handle if user session has expired force user to go to the Login page.
//     const originalConfig = err.config;

//     if (
//       err?.response?.status === serverError500 &&
//       err?.response?.data?.message?.includes(deletedTokenErrorMessage)
//     ) {
//       // store.dispatch(logOutAction());
//       // localStorageManager.eraseUserInfo();
//     }

//     if (
//       err?.response?.status === 403 &&
//       err?.response?.data === accessTokenExpiredMessage &&
//       !err._isRetry
//     ) {
//       originalConfig._isRetry = true;
//       // try {
//       //   const refreshToken = localStorageManager.getRefreshToken();
//       //   const userInfo = await refreshAccessToken({
//       //     refreshToken,
//       //   });
//       //   localStorageManager.setToken(userInfo.token);
//       //   originalConfig.headers["Authorization"] = `Bearer ${userInfo.token}`;
//       //   return apiClient.request(originalConfig);
//       // } catch (error) {
//       //   store.dispatch(logOutAction());
//       //   localStorageManager.eraseUserInfo();
//       // }
//     }

//     return Promise.reject(err);
//   },
// );

export { api };
