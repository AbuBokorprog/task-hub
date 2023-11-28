import React from "react";
import { FaFilter } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "../../Component/Modal/Modal";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full my-4">
              <label className="label label-text">
                <span>
                  Title<span className="text-red-500">*</span>
                </span>
              </label>
              <input
                {...register("title", { required: true })}
                placeholder="Type title"
                className="input input-bordered input-secondary w-full"
              />
              {errors.title?.type === "required" && (
                <p role="alert" className="text-red-500">
                  <small>Title name is required</small>
                </p>
              )}
            </div>
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                {...register("description")}
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
                {...register("priority")}
                className="input input-bordered input-secondary w-full"
              >
                <option defaultValue="Select Priority">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
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
