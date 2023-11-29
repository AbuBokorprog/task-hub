import React from "react";
import { Link } from "react-router-dom";

const TaskSkeleton = () => {
  return (
    <div>
      <div className="card animate-pulse border bg-base-100 shadow-xl rounded-lg p-4 max-w-sm w-full mx-auto py-5 px-4">
        <div className="flex gap-2 items-center">
          <div className="form-control bg-gray-300 border border-primary w-6 h-6 rounded-full"></div>
          <h2 className=" h-6 w-32 rounded-lg bg-gray-300"></h2>
          <div className="badge badge-outline bg-gray-300 w-20"></div>
        </div>

        <div className="h-32 mt-4">
          <p className="bg-gray-300 w-full h-32 rounded-lg"></p>
        </div>
        <div className="flex gap-2 items-center justify-between mt-4">
          <Link to="#" className="btn px-8"></Link>
          <div className="btn px-8"></div>
        </div>
      </div>
    </div>
  );
};

export default TaskSkeleton;
