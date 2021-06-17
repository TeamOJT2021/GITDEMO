import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeMain.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const Profile = () => import("../views/Profile.vue");
const BoardAdmin = () => import("../views/admin/BoardAdmin.vue");
const BoardModerator = () => import("../views/mod/BoardModerator.vue");
const BoardUser = () => import("../views/BoardUser.vue");
const BoardPM = () => import("../views/pm/BoardPM.vue");

const BoardPublic = () => import("../views/BoardPublic.vue");
const Tasks = () => import("../views/Tasks.vue");
const Tutorials = () => import("../views/tutorial/TutorialsList.vue");
const Tutorial = () => import("../views/tutorial/Tutorial.vue");
const AddTutorial = () => import("../views/tutorial/AddTutorial.vue");

const NotFound = () => import("@/views/NotFound.vue");

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/profile",
        name: "profile",
        components: { profile: Profile },
      },
      {
        path: "/public",
        name: "public",
        components: { public: BoardPublic },
      },
      {
        path: "/tasks",
        name: "tasks",
        components: { tasks: Tasks },
      },
      {
        path: "/tutorials",
        // path: "/",
        // alias: "/tutorials",
        name: "tutorials",
        components: { tutorials: Tutorials },
      },
      {
        path: "/tutorials/:id",
        name: "tutorial",
        components: { tutorial: Tutorial },
      },
      {
        path: "/addTutorial",
        name: "addTutorial",
        components: { addTutorial: AddTutorial },
      },
      {
        path: "/board-admin",
        name: "board-admin",
        components: { admin: BoardAdmin },
      },
      {
        path: "/board-mod",
        name: "board-moderator",
        components: { moderator: BoardModerator },
      },
      {
        path: "/board-user",
        name: "board-user",
        components: { user: BoardUser },
      },
      {
        path: "/board-pm",
        name: "board-pm",
        components: { pm: BoardPM },
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  { path: "/login", name: "login", component: Login },
  {
    path: "/register",
    name: "register",
    component: Register,
  },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
