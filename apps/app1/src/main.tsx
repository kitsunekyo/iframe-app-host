import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { RootLayout } from "./layout.tsx";
import { App } from "./App.tsx";
import { ErrorPage } from "./error-page.tsx";
import { Page1 } from "./Page2.tsx";
import { Page2 } from "./Page1.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/page1",
          element: <Page1 />,
        },
        {
          path: "/page2",
          element: <Page2 />,
        },
      ],
    },
  ],
  /* {
    window: window.parent, // only works on same origin
  } */
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
