import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import Propagate from "../Component/Spinner/Propagate";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const Main = () => {
  const { loader } = useContext(AuthContext);
  return (
    <div>
      {loader ? (
        <>
          <Propagate></Propagate>
        </>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;
