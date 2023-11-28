import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Task = (props) => {
  const { id, title, description, priority } = props.task;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedCheckedState = localStorage.getItem(`task-${id}`);
    if (storedCheckedState) {
      setIsChecked(JSON.parse(storedCheckedState));
    }
  }, [id]);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    localStorage.setItem(`task-${id}`, JSON.stringify(newCheckedState));
    setIsChecked(newCheckedState);
  };

  const handleDeleteClick = (id) => {
    const allTask = JSON.parse(localStorage.getItem("task"));

    const filtered = allTask.filter((all) => all.id !== id);
    localStorage.setItem("task", JSON.stringify(filtered));
    window.location.reload();
  };

  return (
    <div className={`my-4 ${isChecked ? "checked-task" : ""}`}>
      <div className="card shadow-xl bg-base-100 py-5 px-4 rounded-xl">
        <div className="">
          <div className="flex gap-2">
            <form className="form-control">
              <input
                type="checkbox"
                name=""
                id=""
                checked={isChecked}
                className="checkbox checkbox-primary"
                onChange={handleCheckboxChange}
              />
            </form>
            <h2
              className={`card-title ${
                isChecked ? "text-red-500 line-through" : ""
              }`}
            >
              {title}
            </h2>
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
          <p
            className={`h-28 mt-4 ${
              isChecked ? "text-red-500 line-through" : ""
            }`}
          >
            {description}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="btn text-red-500">
            <FiEdit className="" />
          </div>
          <div
            className="btn text-red-500"
            onClick={() => handleDeleteClick(id)}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
