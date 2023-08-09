import type { RouteRecordRaw } from "vue-router";
import paths from "@/router/paths";
import {
  ROUTE_HOME,
  ROUTE_NOT_FOUND,
} from "@/router/route-names";

const GENERAL_ROUTES: Array<RouteRecordRaw> = [
  {
    name: ROUTE_NOT_FOUND,
    path: paths.general.notFound,
    component: () => import("@/views/NotFoundPage.vue"),
  },
  {
    path: paths.general.home,
    name: ROUTE_HOME,
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: paths.general.notFound,
  },
];

export default GENERAL_ROUTES;
