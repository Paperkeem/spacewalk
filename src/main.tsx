import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/route.tsx";
import PrivateRoter from "./provider/PrivateRoter.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 60 * 1000,
      refetchOnWindowFocus: false, // default: true
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <PrivateRoter>
        <div id="modal" />
        <RouterProvider router={router} />
      </PrivateRoter>
    </QueryClientProvider>
  </React.StrictMode>
);
