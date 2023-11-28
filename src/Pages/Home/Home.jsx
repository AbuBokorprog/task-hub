import React from "react";
import { FaFilter } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "../../Component/Modal/Modal";

const Home = () => {
  const taskHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <div className="my-10 px-1 pb-96 lg:pb-72">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl lg:text-3xl font-semibold">My Day</h2>
        <div className="">
          <select className="bg-base-100">
            <option defaultValue>Filter</option>
            <option value="Complete">Complete</option>
            <option value="Priority">Priority</option>
          </select>
        </div>
        <Modal title="Add your task" button="Add task">
          <form onSubmit={taskHandler}>
            <div className="form-control w-full my-4">
              <label className="label label-text">
                <span>
                  Title<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Type here"
                className="input input-bordered input-secondary w-full"
              />
            </div>
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              <select
                name=""
                id=""
                className="input input-bordered input-secondary w-full"
              >
                <option defaultValue>Select your priority</option>
                <option value={"Low"}>Low</option>
                <option value={"Medium"}>Medium</option>
                <option value={"High"}>High</option>
              </select>
            </div>

            <div className="my-2">
              <input
                type="submit"
                value="Add Task"
                className="btn btn-primary w-full"
              />
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
