import { createBrowserRouter } from "react-router-dom";
import Layout from "../screens/Layout";
import HomePage from "../screens/HomePage";
import ErrorPage from "../screens/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/home", element: <HomePage /> }],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
