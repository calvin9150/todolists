import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/HomeView.vue'
import TodoList from "../components/TodoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: TodoList,
  },
  {
    path: "/about/:id",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
