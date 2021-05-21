import { lazy } from "react";
export const mainRoutes = [
  {
    name: "",
    path: "/",
    private: false,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /*webpackChunkName:'HomePage'*/)
    ),
  },
  {
    name: "phonebook",
    path: "/phonebook",
    private: true,
    restricted: false,
    exact: true,
    component: lazy(() =>
      import("../pages/PhoneBookPage" /*webpackChunkName:'PhoneBookPage'*/)
    ),
  },
  {
    name: "registration",
    path: "/registration",
    private: false,
    restricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'AuthPage'*/)
    ),
  },
  {
    name: "login",
    path: "/login",
    private: false,
    restricted: true,
    exact: true,
    component: lazy(() =>
      import("../pages/AuthPage" /*webpackChunkName:'AuthPage'*/)
    ),
  },
];
