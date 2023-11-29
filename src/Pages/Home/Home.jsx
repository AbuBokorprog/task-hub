import React, { useState } from "react";
import Modal from "../../Component/Modal/Modal";
import { useForm } from "react-hook-form";
// import swal from "sweetalert";
import Task from "../Task/Task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const existTask = JSON.parse(localStorage.getItem("task")) || [];
  const [priorityFilter, setPriorityFilter] = useState(null);
  const [task, setTask] = useState(existTask);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const date = Date.now();
    console.log(date);
    const newTask = { id: Date.now(), ...data };
    setTask([newTask, ...task]);
    localStorage.setItem("task", JSON.stringify([newTask, ...task]));
    toast.success("Task added successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    reset();
  };
  const filteredTasks = priorityFilter
    ? task.filter((t) => t.priority === priorityFilter)
    : task;
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div className="my-10 px-1">
      <ToastContainer />
      <div className="flex justify-between items-center">
        <h2 className="text-2xl lg:text-3xl font-semibold">My Day</h2>
        <div className="">
          <select
            className="bg-base-100"
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="">Filter</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
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
        </Modal>
      </div>
      <div className="my-10">
        {existTask.length > 0 ? (
          <h2 className="text-2xl font-medium">All Task</h2>
        ) : (
          <p className="text-center max-h-screen my-52 lg:my-32">
            You didn't add any task
          </p>
        )}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mx-auto">
          {currentTasks.map((t) => (
            <Task key={t.id} task={t}></Task>
          ))}
        </div>
      </div>
      {existTask.length > 10 && (
        <div className="flex justify-center my-20">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="btn btn-outline mx-1 px-4 py-2 rounded"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`btn ${
                currentPage === index + 1 ? "btn-primary" : "btn-base-100"
              } mx-1 px-4 py-2 rounded`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="btn btn-outline mx-1 px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
