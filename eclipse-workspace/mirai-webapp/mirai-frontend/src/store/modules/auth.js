import AuthService from "../../api/auth-service";
import { getJsonToken } from "../../utils/cookies";
const user = getJsonToken();
console.log("JSON ", user);
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export default {
  namespaced: true,
  state: initialState,
  actions: {
    async LOGIN({ commit }, user) {
      return await AuthService.login(user).then(
        (user) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error) => {
          console.log("Error: " + error);
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    async LOGOUT({ commit }) {
      await AuthService.logout();
      commit("logout");
    },
    async REGISTER({ commit }, user) {
      return await AuthService.register(user).then(
        (response) => {
          console.log("success");
          commit("registerSuccess");
          return Promise.resolve(response.data);
        },
        (error) => {
          console.log("false", error.message);
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  getters: {},
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
  },
};
