import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/route.tsx";
import PrivateRoter from "./provider/PrivateRoter.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <PrivateRoter>
        <RouterProvider router={router} />
      </PrivateRoter>
    </QueryClientProvider>
  </React.StrictMode>
);
