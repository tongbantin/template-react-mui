import axios from "axios";
import {
  ClearTokens,
  GetAccessToken,
  GetRefreshToken,
  SetTokens,
} from "./sessions";
import { hashHistory } from "react-router";
import { apiError, Inform } from "./alert";
export const API_URL = {
  Job: window.config.API_JOB,
  Authen: window.config.API_AUTHEN,
  Lobby: window.config.API_LOBBY,
  Docs: window.config.DOCS,
  Report: window.config.API_REPORT,
};

///////////// Authentication and Authorization /////////////////////////
// add Authorization as default header
axios.interceptors.request.use(async (config) => {
  const jwt = GetAccessToken();
  if (jwt != null) {
    config.headers.Authorization = `Bearer ${jwt}`;
  }
  return config;
});

let isRefreshingToken = false;
let isRedirectingToLogin = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function redirectToLogin() {
  if (!isRedirectingToLogin) {
    isRedirectingToLogin = true;
    let urlSaml = `${API_URL.Authen}/auth/Login?returnUrl=/`;
    window.location.replace(urlSaml);
  }
}
function RedirectToHome() {
  window.location.replace("/");
}
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
        const originalRequest = error.config;
        const refreshToken = GetRefreshToken();
        if (refreshToken && error.config && !error.config.__isRetryRequest) {
          if (isRefreshingToken) {
            let sleepCount = 50;
            while (isRefreshingToken && sleepCount > 0) {
              await sleep(200);
              sleepCount--;
            }
            if (isRefreshingToken) {
              redirectToLogin();
            } else {
              originalRequest._retry = true;
              return new Promise((resolve) => {
                resolve(axios(originalRequest));
              });
            }
          } else {
            isRefreshingToken = true;
            return new Promise((resolve) => {
              originalRequest._retry = true;
              let url = `${API_URL.Authen}/auth/jwtrefresh`;
              const response = fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  RefreshToken: refreshToken,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  SetTokens(data.UserId, data.AccessToken, data.RefreshToken);
                  isRefreshingToken = false;
                  return axios(originalRequest);
                })
                .catch((err) => {
                  ClearTokens();
                  redirectToLogin();
                })
                .finally(() => {
                  isRefreshingToken = false;
                });
              resolve(response);
            });
          }
        } else {
          redirectToLogin();
        }
      } else if (error.response.status === 403) {
        // unauthorized (user ไม่มีสิทธิ์)
        // InformationOKDialog("PermissionDenied")

        await Inform("Access Denied.");
        RedirectToHome();
      } else if (error.response.status === 400) {
        return { data: { Incorrect: true } };
      }
      apiError(error)
    } else apiError(error);
    return Promise.reject(error);
  }
);
