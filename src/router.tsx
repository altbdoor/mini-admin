import { createHashRouter } from "react-router-dom";
import { Dashboard } from "./views/Dashboard";
import { Login } from "./views/Login";
import { Root } from "./views/Root";
import { Home } from "./views/Home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
