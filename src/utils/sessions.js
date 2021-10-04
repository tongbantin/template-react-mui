import history from "../template/history";

export function CheckToken() {
    return sessionStorage.getItem('AccessToken') ? true : false
}
export function Logout() {
    ClearTokens();
    sessionStorage.removeItem('UserId');
    history.go('Login');
}
export function ClearTokens() {
    sessionStorage.removeItem('AccessToken');
    sessionStorage.removeItem('RefreshToken');
}
export function GetUser() {
    return sessionStorage.getItem('UserId');
}
export function GetAccessToken() {
    return sessionStorage.getItem('AccessToken');
}
export function GetRefreshToken() {
    return sessionStorage.getItem('RefreshToken');
}
export function SetTokens(userid, access, refresh) {
    sessionStorage.setItem('AccessToken', access);
    sessionStorage.setItem('RefreshToken', refresh);
    sessionStorage.setItem('UserId', userid);
}