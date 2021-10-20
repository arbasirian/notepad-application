import axios from 'axios';
import { cookiesHelper, notificationHelper } from 'helpers';

const Cookies = new cookiesHelper();

const whitleList: string[] = ['/auth/login/email'];

const access = Cookies.get('notepad_application_token');
const refresh = Cookies.get('notepad_application_refresh_token');
const expires = Cookies.get('notepad_application_token_expire_date') || 0;

let isRefreshingToken: boolean = false;

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;
axios.defaults.withCredentials = true;

const isTokenExpired = (): boolean => {
  try {
    const tokenExpireTimestamp: number = new Date(expires).getTime();
    if (tokenExpireTimestamp < 1) return true;

    if (isNaN(tokenExpireTimestamp)) return true;

    const now: number = new Date().getTime();

    return now > tokenExpireTimestamp - 3000;
  } catch (_) {
    return true;
  }
};

export const logoutUser = (): void => {
  Cookies.removeAll();
  localStorage.removeItem('persist:root');
  setTimeout(() => {
    window.location.pathname = '/auth/login';
  }, 100);
};

axios.interceptors.request.use(
  (config: any) => {
    try {
      if (typeof window !== undefined) {
        // check if there isn't need to refresh token
        if (!isTokenExpired()) return config;

        // check the call is related to get refresh token or the other public APIs.
        //@ts-ignore

        if (WHITE_LIST.some((item) => config.url.includes(item))) return config;

        // if (isTokenExpired()) logoutUser();
        // if (!Cookies.get('refresh_token')) logoutUser();

        let newConfig = { ...config };

        // if (isRefreshingToken) {
        //   newConfig.headers.Authorization =
        //     await getFreshTokenFromOtherThread();
        // } else {
        //   newConfig.headers.Authorization = await getFreshTokenDirectly();
        // }

        isRefreshingToken = false;
        return newConfig;
      }
    } catch (_) {
      return config;
    }
  },
  (error) => {
    // request error
    isRefreshingToken = false;
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response?.status < 300) return response;
    return Promise.reject('An error occurred.');
  },
  (error) => {
    let response = error && error.response;
    if (
      error?.config.url &&
      !notificationHelper.handleNoNotification(error.config.url)
    )
      if (response) {
        // Request made and server responded
        // console.log(response.data.error)
        // openNotification(`Error ${response.status}`, `${response?.data?.error ? response?.data?.error : "Not valid user, Please login"}`);
        if (error.response.status === 401) {
          return logoutUser();
          // Todo: Remove cookie if the url was refresh
        }
        notificationHelper.errorNotification(error.response);
        // console.log(response?.data?.code)
        // console.log(response?.data?.message)
        return Promise.reject(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        return Promise.reject(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
        return Promise.reject(error.message);
      }
  }
);
