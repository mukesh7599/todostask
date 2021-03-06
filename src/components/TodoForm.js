import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
const generateId = (array) => {
  const ids = array.map((item) => item.id);
  return Math.max(...ids) + 1;
};

const TodoForm = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState("");

  const inputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (todoInput) {
      const newTodo = {
        id: generateId(todos),
        content: todoInput.trim(),
        completed: false,
      };

      setTodos([newTodo, ...todos]);
      setTodoInput("");
    }
  };

  return (
    <div className="form-control">
      <form onSubmit={inputSubmit}>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          id="todoInput"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={inputChange}
        />
        <button
          className="addBtn"
          style={{ border: 0, backgroundColor: "transparent" }}
          type="submit"
        >
          <GrAdd />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
