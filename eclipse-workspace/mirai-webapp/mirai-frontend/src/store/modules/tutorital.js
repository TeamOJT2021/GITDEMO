import TutorialsService from "../../api/tutorial-service";

const state = {
  tutorials: [],
  tutorial: {},
  tutorialsPaginatedData: {},
  isCreating: false,
  createdData: {},
  isUpdating: false,
  updatedData: {},
  isDeleting: false,
  deletedData: {},
  isLoading: false,
};

const getters = {
  tutorials: (state) => state.tutorials,
  tutorial: (state) => state.tutorial,
  tutorialsPaginatedData: (state) => state.tutorialsPaginatedData,
  isLoading: (state) => state.isLoading,
  isCreating: (state) => state.isCreating,
  isUpdating: (state) => state.isUpdating,
  createdData: (state) => state.createdData,
  updatedData: (state) => state.updatedData,
  isDeleting: (state) => state.isDeleting,
  deletedData: (state) => state.deletedData,
};

const actions = {
  async fetchAllTutorials({ commit }, params) {
    if (params.searchTitle) {
      params["title"] = params.searchTitle;
    }

    if (params.page) {
      console.log("PAGE: ", params.page);
      params["page"] = params.page - 1;
    }

    if (params.pageSize) {
      console.log("PAGE SIZE: ", params.pageSize);
      params["size"] = params.pageSize;
    }
    commit("setTutorialIsLoading", true);
    await TutorialsService.getAll(params)
      .then((response) => {
        console.log("fetchAllTutorials: ", response.data);
        const tutorials = response.data.tutorials;
        commit("setTutorials", tutorials);
        const pagination = {
          currentPage: response.data.currentPage,
          totalItems: response.data.totalItems,
          totalPages: response.data.totalPages,
        };
        commit("setTutorialsPaginatedData", pagination);
        commit("setTutorialIsLoading", false);
      })
      .catch((error) => {
        console.log(error);
        commit("setTutorialIsLoading", false);
      });
  },
  async fetchTutorialDetail({ commit }, tutorialId) {
    commit("setTutorialIsLoading", true);
    await TutorialsService.get(tutorialId)
      .then((response) => {
        console.log("fetchTutorialDetail: ", response.data);
        commit("setTutorialDetail", response.data);
        commit("setTutorialIsLoading", false);
      })
      .catch((error) => {
        console.log(error);
        commit("setTutorialIsLoading", false);
      });
  },
  async searchByTutorials({ commit }, searchTitle) {
    await TutorialsService.findByTitle(searchTitle)
      .then((response) => {
        commit("setTutorialIsLoading", true);
        const tutorials = response.data.tutorials;
        commit("setTutorials", tutorials);
        const pagination = {
          currentPage: response.data.currentPage,
          totalItems: response.data.totalItems,
          totalPages: response.data.totalPages,
        };
        commit("setTutorialsPaginatedData", pagination);
        commit("setTutorialIsLoading", false);
      })
      .catch((error) => {
        console.log(error);
        commit("setTutorialIsLoading", false);
      });
  },
  async storeTutorial({ commit }, product) {
    commit("setTutorialIsCreating", true);
    await TutorialsService.create(product)
      .then((response) => {
        commit("saveNewTutorial", response.data);
        commit("setTutorialIsCreating", false);
      })
      .catch((error) => {
        console.log(error);
        commit("setTutorialIsCreating", false);
      });
  },
  async deleteTutorial({ commit }, tutorialId) {
    commit("setTutorialIsDeleting", true);
    await TutorialsService.delete(tutorialId)
      .then((response) => {
        console.log("deleteTutorial: ", response);
        commit("setTutorialIsDeleting", false);
      })
      .catch((error) => {
        console.log(error);
        commit("setTutorialIsDeleting", false);
      });
  },
  async editTutorial({ commit }, tutorial) {
    commit("setTutorialIsUpdating", true);
    await TutorialsService.update(tutorial.id, tutorial)
      .then((response) => {
        console.log("editTutorials: ", response.data);
        const tutorial = response.data;
        commit("setTurorialUpdate", tutorial);
        commit("setTutorialIsUpdating", false);
      })
      .catch((error) => {
        console.log(error);
        commit("setTutorialIsUpdating", false);
      });
  },
};

const mutations = {
  setTutorials(state, tutorials) {
    state.tutorials = tutorials;
  },
  setTutorialDetail(state, tutorial) {
    state.tutorial = tutorial;
  },
  setTutorialsPaginatedData(state, tutorialsPaginatedData) {
    state.tutorialsPaginatedData = tutorialsPaginatedData;
  },
  saveNewTutorial: (state, tutorial) => {
    state.tutorials.unshift(tutorial);
    state.createdData = tutorial;
  },
  setTutorialDelete(state, tutorialId) {
    state.tutorials.filter((tutorial) => tutorial.id !== tutorialId);
  },
  setTurorialUpdate(state, tutorial) {
    state.tutorial = tutorial;
    state.updatedData = tutorial;
  },
  setTutorialIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },

  setTutorialIsCreating(state, isCreating) {
    state.isCreating = isCreating;
  },

  setTutorialIsUpdating(state, isUpdating) {
    state.isUpdating = isUpdating;
  },

  setTutorialIsDeleting(state, isDeleting) {
    state.isDeleting = isDeleting;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
