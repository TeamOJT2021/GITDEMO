const state = {
  typeProject: "My Project",
  isOpenProjectMSC: false,
  isOpenEditTask: false,
};

const getters = {
  isOpenEditTask: (state) => state.isOpenEditTask,
  isOpenProjectMSC: (state) => state.isOpenProjectMSC,
  getTypeProject: (state) => state.typeProject,
};

const actions = {};
const mutations = {
  SET_IS_OPEN_PROJECT_MSC(state) {
    state.typeProject = "Project MSC";
    state.isOpenProjectMSC = true;
  },
  SET_IS_OPEN_MY_PROJECT(state) {
    state.typeProject = "My Project";
    state.isOpenProjectMSC = false;
  },
  SET_IS_OPEN_EDIT_TASK(state) {
    state.isOpenEditTask = !state.isOpenEditTask;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
