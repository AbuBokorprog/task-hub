import React from "react";

const Modal = ({ children, title, button }) => {
  return (
    <div>
      <button
        className="btn btn-secondary text-white"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        {button}
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-10">{title}</h3>
          {children}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
