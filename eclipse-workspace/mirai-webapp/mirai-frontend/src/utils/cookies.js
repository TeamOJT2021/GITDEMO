import Cookies from "js-cookie";

const TokenKey = "COOKIE_BEARER";

export async function getToken() {
  return await Cookies.get(TokenKey);
}
export async function getJsonToken() {
  return await Cookies.getJSON(TokenKey);
}

export async function setToken(token) {
  return await Cookies.set(TokenKey, token);
}

export async function removeToken() {
  return await Cookies.remove(TokenKey);
}
