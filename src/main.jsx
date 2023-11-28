import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import AuthProvider from "./Provider/AuthProvider/AuthProvider.jsx";
import Home from "./Pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>error</p>,
    children: [
      {
        path: "/",
        element: <Home />,
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
