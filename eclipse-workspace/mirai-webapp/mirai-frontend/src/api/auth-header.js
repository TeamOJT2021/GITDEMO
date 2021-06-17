import { getJsonToken } from "../utils/cookies";
export default function authHeader() {
  let user = getJsonToken();

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
