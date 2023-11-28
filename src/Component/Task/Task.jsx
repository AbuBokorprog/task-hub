import React from "react";
import { Link } from "react-router-dom";

const Task = (props) => {
  console.log(props.task);
  const { id, title, description, priority } = props.task;
  return (
    <div className="my-10 ">
      <div className="bg-base-200 py-5 px-4 rounded-xl">
        <div className="">
          <form className="form-control">
            <input type="checkbox" name="" id="" className="checkbox" />
          </form>
          <div className="flex gap-2">
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
          <p>{description}</p>
        </div>
        <div className="">
          <div className="btn">edit</div>
          <div className="btn">delete</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
