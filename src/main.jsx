import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import PrivateRoute from "./Provider/PrivateRoute/PrivateRoute.jsx";
import Main from "./Layout/Main.jsx";
import EditTask from "./Component/EditTask/EditTask.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>error</p>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/editTask/:id",
        element: (
          <PrivateRoute>
            <EditTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="container mx-auto lg:px-20">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
