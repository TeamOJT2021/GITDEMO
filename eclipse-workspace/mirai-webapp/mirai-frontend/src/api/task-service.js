import axios from "axios";
import authHeader from "./auth-header";

const axiosApi = axios.create({
  baseURL: `/api`,
  timeout: 1000,
  headers: authHeader(),
});
export default {
  getAllTasks() {
    return axiosApi.get(`/auth/tasks`);
  },

  async saveTask() {
    return await axiosApi.post(`/auth/task/save`);
  },

  async getTaskById(taskId) {
    return await axiosApi.get(`/auth/task/id/${taskId}`);
  },

  async getAdminBoard(taskId) {
    return await axiosApi.put(`/auth/task/id/${taskId}/edit`);
  },
};

// export default new UserService();
