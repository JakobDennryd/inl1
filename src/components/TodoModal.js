import React from "react";

const TodoModal = ({ newTodo, open, onClose }) => {
  if (!open) return null;

  return (
    <div className="todo-modal">
      <div
        className="outer-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="container">
          <h3>You have now created the following task!</h3>
          <div> {newTodo} </div>
          <button type="button" className="modal-button" onClick={onClose}>
            {" "}
            Close{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
