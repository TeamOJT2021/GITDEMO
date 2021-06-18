import { createStore } from "vuex";
import MSCs from "./modules/msc";
import Task from "./modules/task";

const store = createStore({
  modules: {
    MSCs,
    Task,
  },
});

export default store;
