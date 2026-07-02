import type { RouteObject } from "react-router-dom";
import { ROUTE_PATHS } from "./routePaths";
import { lazyPage } from "./lazyPage";

type LazyRoute = Pick<RouteObject, "path" | "lazy" | "index">;

export const publicRoutes: LazyRoute[] = [
  {
    path: ROUTE_PATHS.LOGIN,
    lazy: lazyPage(() => import("../pages/Login"), "Login"),
  },
  {
    path: ROUTE_PATHS.REGISTER,
    lazy: lazyPage(() => import("../pages/Register"), "Register"),
  },
];

export const protectedRoutes: LazyRoute[] = [
  {
    index: true,
    lazy: lazyPage(() => import("../pages/Home"), "Home"),
  },
  {
    path: ROUTE_PATHS.EMPLOYEES,
    lazy: lazyPage(() => import("../pages/Employees"), "Employees"),
  },
  {
    path: ROUTE_PATHS.NOTIFICATIONS,
    lazy: lazyPage(() => import("../pages/Notifications"), "Notifications"),
  },
];
