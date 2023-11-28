import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Login = () => {
  const { google, Github } = useContext(AuthContext);

  const GoogleHandler = () => {
    google()
      .then((result) => {})
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  const GithubHandler = () => {
    Github()
      .then((result) => {})
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="card py-8 shadow-2xl bg-base-100">
        <div className="px-10">
          <h2 className="text-2xl mb-2 text-center font-semibold">
            Sign Up or Log in
          </h2>
          <hr className="border border-gray-400" />
          <div
            onClick={GoogleHandler}
            className="flex items-center gap-4 btn my-4"
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
