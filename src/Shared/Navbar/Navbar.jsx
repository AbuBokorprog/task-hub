import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const logoutHandler = () => {
    logout()
      .then(() => {})
      .then((error) => {});
  };
  return (
    <div>
      <div className="navbar bg-base-200 py-4">
        <div className="flex-1">
          <Link className=" text-3xl lg:text-4xl font-bold">Task Hub</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt={user?.displayName}
                    src={user?.photoURL}
                    title={user?.displayName}
                  />
                </div>
              </div>
              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <button className="btn" onClick={logoutHandler}>
                  Logout
                </button>
              </ul>
            </div>
          ) : (
            <button className="btn btn-primary px-6">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
