import type { RouteObject } from "react-router-dom";
import { lazyPage } from "./lazyPage";
import { ROUTE_PATHS } from "./routePaths";

export const notFoundRoute: RouteObject = {
  path: ROUTE_PATHS.NOT_FOUND,
  lazy: lazyPage(() => import("../pages/NotFound"), "NotFound"),
};
