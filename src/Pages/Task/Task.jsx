import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import TaskSkeleton from "../../Component/Skeleton/TaskSkeleton";

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
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const filtered = allTask.filter((all) => all.id !== id);
        localStorage.setItem("task", JSON.stringify(filtered));
        window.location.reload();
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <TaskSkeleton />
        </>
      ) : (
        <div className={`my-4 ${isChecked ? "checked-task" : ""}`}>
          <div className="card shadow-xl bg-base-100 py-5 px-4 rounded-xl">
            <div className="">
              <div className="flex gap-2 items-center">
                <form className="form-control">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    className="checkbox checkbox-primary rounded-xl"
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
                className={`h-32 mt-4 ${
                  isChecked ? "text-red-500 line-through" : ""
                }`}
              >
                <small>{description}</small>
              </p>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <Link to={`/editTask/${id}`} className="btn text-red-600">
                <FiEdit /> Edit
              </Link>
              <div
                className="btn text-red-600"
                onClick={() => handleDeleteClick(id)}
              >
                <MdDelete /> Delete
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
