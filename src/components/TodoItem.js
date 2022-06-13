import React, { useState } from "react";
import IconCheck from "../images/icon-check.svg";
import { AiOutlineClose } from "react-icons/ai";
import { notification } from "antd";
import "antd/dist/antd.css";
const TodoItem = ({ todo, todos, setTodos }) => {
  const [mutableTodo, setMutableTodo] = useState(todo);

  const classes = mutableTodo.completed ? "completed" : "";
  const checkIcon = mutableTodo.completed ? (
    <img src={IconCheck} alt="Completed" />
  ) : (
    ""
  );

  const deleteNotification = (placement) => {
    notification.info({
      message: `Done`,
      description: "Task Deleted",
      placement,
    });
  };
  const completedNotification = (placement) => {
    notification.info({
      message: `Done`,
      description: "Great Work!!",
      placement,
    });
  };
  const activeNotification = (placement) => {
    notification.info({
      message: `warning`,
      description: "Tasks Incompleted",
      placement,
    });
  };

  function deleteTodo(index) {
    const result = todos.filter((item) => item.id !== index);
    console.log("todos", result);
    result.splice(index, 1);
    setTodos(result);
    deleteNotification("top");
  }

  const toggleCompleted = () => {
    setMutableTodo({ ...mutableTodo, completed: !mutableTodo.completed });
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
    mutableTodo.completed && activeNotification("top");
    !mutableTodo.completed && completedNotification("top");
  };

  return (
    <li className={classes}>
      <input
        id={`todoCheckbox-${todo.id}`}
        type="checkbox"
        name="completed-checkbox"
        defaultChecked={mutableTodo.completed}
      />
      <div className="checkboxBorderWrap">
        <span className="checkbox" onClick={toggleCompleted}>
          {checkIcon}
        </span>
      </div>
      <div className="todoContent">
        <p style={{ margin: 0 }}>{mutableTodo.content}</p>
        <button
          style={{ border: 0, backgroundColor: "transparent" }}
          onClick={deleteTodo}
        >
          <AiOutlineClose />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
