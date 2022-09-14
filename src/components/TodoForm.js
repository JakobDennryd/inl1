import React, { useState } from "react";
import TodoModal from "./TodoModal";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="container">
        <h2>Create new Todo</h2>
        <div>Write down what you want to add to the list!</div>
        <form className="todo-form">
          <label>Task</label>
          <input
            type="text"
            value={todo}
            required
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            {" "}
            Create{" "}
          </button>
        </form>
      </div>
      <TodoModal
        newTodo={todo}
        open={openModal}
        onClose={() => setOpenModal(false)}
      ></TodoModal>
    </>
  );
};

export default TodoForm;
