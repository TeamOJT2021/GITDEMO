import axios from "axios";

const axiosApi = axios.create({
  baseURL: `/api`,
  timeout: 1000,
  responseType: "json",
});
export default {
  async editTask(taskId) {
    return await axiosApi.put(`/task/id/${taskId}/edit`);
  },
  async getAllTasks() {
    return await axiosApi.get(`/tasks`);
  },
};
