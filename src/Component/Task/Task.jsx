import React from "react";
import { Link } from "react-router-dom";

const Task = (props) => {
  console.log(props.task);
  const { id, title, description, priority } = props.task;
  return (
    <div className="my-4 ">
      <div className="card shadow-xl bg-base-100 py-5 px-4 rounded-xl">
        <div className="">
          <div className="flex gap-2">
            <form className="form-control">
              <input type="checkbox" name="" id="" className="checkbox" />
            </form>
            <h2 className="card-title">{title}</h2>
            <div
              className={`badge badge-outline ${
                priority === "Low"
                  ? "bg-red-500"
                  : priority === "Medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              {priority}
            </div>
          </div>
          <p className="h-28 mt-4">{description}</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="btn">edit</div>
          <div className="btn">delete</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
