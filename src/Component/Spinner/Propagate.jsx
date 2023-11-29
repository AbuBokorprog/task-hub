import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Propagate = ({ size = 15 }) => {
  return (
    <div className={` py-6 md:py-16 flex justify-center h-screen items-center`}>
      <PropagateLoader
        color="#009dff"
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Propagate;
