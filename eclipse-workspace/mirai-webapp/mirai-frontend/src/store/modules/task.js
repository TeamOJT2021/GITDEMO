import TaskService from "../../api/task-service";

const state = {
  tasks: [],
};
const getters = { tasks: (state) => state.tasks };
const actions = {
  async getAllTasks({ commit }) {
    await TaskService.getAllTasks()
      .then((response) => {
        commit("SET_GET_ALL_TASKS", response.data);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
};
const mutations = {
  SET_GET_ALL_TASKS(state, tasks) {
    state.tasks = tasks;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
