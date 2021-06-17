import axios from "axios";
import { removeToken } from "../utils/cookies";
const axiosApi = axios.create({
  baseURL: `/api`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});
export default {
  async login(user) {
    return await axiosApi
      .post(`/signin`, {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        // if (response.data.accessToken) {
        //   setToken({
        //     accessToken: response.data.accessToken,
        //     roles: response.data.roles,
        //     username: response.data.username,
        //   });
        // }
        console.log("Response: ", response.data);
        return response.data;
      });
  },

  async logout() {
    await removeToken();
  },

  async register(user) {
    return await axiosApi.post(`/signup`, {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  },
};

// export default new AuthService();
