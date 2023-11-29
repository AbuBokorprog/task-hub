import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { google, Github } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const GoogleHandler = () => {
    google()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  const GithubHandler = () => {
    Github()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="card py-10 lg:py-20 shadow-2xl bg-base-100">
        <div className="px-10">
          <h2 className="text-2xl my-2 text-center font-semibold">
            Sign Up or Log in
          </h2>
          <hr className="border border-gray-400" />
          <div
            onClick={GoogleHandler}
            className="flex items-center gap-4 btn my-8"
          >
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              alt=""
            />
            <h3 className="text-xl font-medium">Sign Up with Google</h3>
          </div>

          <div onClick={GithubHandler} className="flex items-center btn gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png"
              alt=""
              className="w-8"
            />
            <h3 className="text-xl font-medium">Sign Up with GitHub</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
