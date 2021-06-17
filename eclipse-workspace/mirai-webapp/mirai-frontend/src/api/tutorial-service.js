import axios from "axios";
const axiosApi = axios.create({
  baseURL: `/api/auth`,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});
export default {
  getAll(params) {
    return axiosApi.get("/tutorials", { params });
  },

  get(id) {
    return axiosApi.get(`/tutorials/${id}`);
  },
  create(data) {
    return axiosApi.post("/tutorials", data);
  },

  update(id, data) {
    return axiosApi.put(`/tutorials/${id}`, data);
  },

  delete(id) {
    return axiosApi.delete(`/tutorials/${id}`);
  },

  deleteAll() {
    return axiosApi.delete(`/tutorials`);
  },

  findByTitle(title) {
    return axiosApi.get(`/tutorials?title=${title}`);
  },
};
