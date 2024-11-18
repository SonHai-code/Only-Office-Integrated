/**
 * Set up the routes for the app.
 *
 */

import React from "react";
import { paths } from "./paths";
import CookieUtils from "../utils/get-cookie-by-name";
import { Navigate } from "react-router-dom";

const Home = React.lazy(() => import("../pages/home"));
const Login = React.lazy(() => import("../pages/login"));

// Redirect to whether HomePage or LoginPage depending on the token which stored in the localStorage
const token = localStorage.getItem("token");

// Set up specific pathname with corresponsing component.
export const routes = [
  {
    path: "/",
    element: token ? (
      <Navigate to={paths.HOME} replace />
    ) : (
      <Navigate to={paths.LOGIN} replace />
    ),
  },
  { path: paths.HOME, element: <Home /> },
  { path: paths.LOGIN, element: <Login /> },
];
