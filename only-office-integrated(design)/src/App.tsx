import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts";
import Error from "./pages/error";
import { paths, routes } from "./routes";
import CookieUtils from "./utils/get-cookie-by-name";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
