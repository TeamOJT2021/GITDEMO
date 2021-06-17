import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getToken } from "./utils//cookies";

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/home", "/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = getToken;

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});
createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
