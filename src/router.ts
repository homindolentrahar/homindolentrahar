import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import HomePage from "./home/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: HomePage },
  { path: "/about", component: HomePage },
  { path: "/projects", component: HomePage },
  { path: "/leet-to-lit", component: HomePage },
  { path: "/grinding", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
