import paths from "@/router/paths";
import {
  ROUTE_HOME,
  ROUTE_NOT_FOUND,
  ROUTE_RESULT,
  ROUTE_DETAIL,
  ROUTE_ADD_MOVIE,
} from "@/router/route-names";

const GENERAL_ROUTES = [
  {
    path: paths.general.result,
    name: ROUTE_RESULT,
    component: () => import("@/views/ResultPage.vue"),
  },
  {
    path: paths.general.detail,
    name: ROUTE_DETAIL,
    component: () => import("@/views/MovieDetailPage.vue"),
  },
  {
    path: paths.general.addMovie,
    name: ROUTE_ADD_MOVIE,
    component: () => import("@/views/CreateMoviePage.vue"),
  },
  {
    path: paths.general.home,
    name: ROUTE_HOME,
    component: () => import("@/views/HomePage.vue"),
  },
  {
    name: ROUTE_NOT_FOUND,
    path: paths.general.notFound,
    component: () => import("@/views/NotFoundPage.vue"),
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: paths.general.notFound,
  },
];

export default GENERAL_ROUTES;
