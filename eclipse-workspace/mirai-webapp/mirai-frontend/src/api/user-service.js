import axios from "axios";
import authHeader from "./auth-header";

const axiosApi = axios.create({
  baseURL: `/api`,
  timeout: 1000,
  headers: authHeader(),
});
export default {
  async getPublicContent() {
    return await axiosApi.get(`/auth/all`);
  },

  async getUserBoard() {
    return await axiosApi.get(`/auth/user`);
  },

  async getModeratorBoard() {
    return await axiosApi.get(`/auth/mod`);
  },

  async getAdminBoard() {
    return await axiosApi.get(`/auth/admin`);
  },
  async getPMBoard() {
    return await axiosApi.get(`/auth/admin/projects`);
  },
};

// export default new UserService();
