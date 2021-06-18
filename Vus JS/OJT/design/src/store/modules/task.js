import TaskService from "../../api/task-service";

const state = {
  tasks: [],
};
const getters = {
  tasks: (state) => state.tasks,
};
const actions = {
  async getAllTasks({ commit }) {
    await TaskService.getAllTasks()
      .then((response) => {
        console.log(response.data);
        commit("SET_GET_ALL_TASKS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async editTask({ commit }, taskUpdate) {
    await TaskService.editTask(taskUpdate.taskId)
      .then((response) => {
        commit("SET_EDIT_TASK", response.data);
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  },
};
const mutations = {
  SET_GET_ALL_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  SET_EDIT_TASK(state, { taskUpdate }) {
    state.tasks.find((task) => {
      if (task.taskId === taskUpdate.taskId) {
        console.log("run");
        task = taskUpdate;
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
