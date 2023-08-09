import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import GENERAL_ROUTES from "./routes/general-routes";

const routes: Array<RouteRecordRaw> = [...GENERAL_ROUTES];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
