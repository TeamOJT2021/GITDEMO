import { createStore } from "vuex";
import auth from "./modules/auth";
import task from "./modules/task";
import tutorials from "./modules/tutorital";

const storeData = {
  modules: {
    auth,
    task,
    tutorials,
  },
};

const store = createStore(storeData);
export default store;
