import { createBrowserRouter } from "react-router-dom";
import Layout from "../screens/Layout";
import HomePage from "../screens/HomePage";
import ErrorPage from "../screens/ErrorPage";
import IssuePage from "../screens/IssuePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <HomePage /> },
      {
        path: "/issue/:issueId",
        element: <IssuePage />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
