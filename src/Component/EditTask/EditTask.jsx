import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditTask = () => {
  const { id } = useParams();
  const existTask = JSON.parse(localStorage.getItem("task")) || [];
  const singleTask = existTask.find((task) => task.id == id);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // const newTask = { id: Date.now(), ...data };
    // setTask([newTask, ...task]);
    // localStorage.setItem("task", JSON.stringify([newTask, ...task]));
    // reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-4">
          <label className="label label-text">
            <span>
              Title<span className="text-red-500">*</span>
            </span>
          </label>
          <input
            {...register("title", { required: true, maxLength: 25 })}
            placeholder="Type title"
            className="input input-bordered input-secondary w-full"
          />
          {errors.title?.type === "required" && (
            <p role="alert" className="text-red-500">
              <small>Title name is required</small>
            </p>
          )}
          {errors.title?.type === "maxLength" && (
            <p role="alert" className="text-red-500">
              <small>Title name must be maximum 25</small>
            </p>
          )}
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            {...register("description", { maxLength: 200 })}
            placeholder="Type here"
            className="input input-bordered input-secondary w-full"
          />
          {errors.description?.type === "maxLength" && (
            <p role="alert" className="text-red-500">
              <small>Description must be maximum 200 character</small>
            </p>
          )}
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
    </div>
  );
};

export default EditTask;
