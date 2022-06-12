import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoFilterControl from "./TodoFilterControl";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  filterStatus,
  setFilterStatus
}) => {
  const [leftTodoCount, setLeftTodoCount] = useState(0);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => !todo.completed);
    setLeftTodoCount(unCompletedTodos.length);
  }, [todos]);

  const textPlacer = filterStatus === "completed" ? "closed task" : "task";

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilterStatus("all");
  };

  return (
    <>
      <section className="todoListSection">
        {filteredTodos.length < 1 ? (
          <p className="infoText">There's no {textPlacer}</p>
        ) : (
          <ul className="todoList">
            {filteredTodos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
          </ul>
        )}
</section>
        <div className="filterControl">
          <div className="todos-count">{leftTodoCount} items left</div>

          <div className="control-btn group filter-control-for-desktop">
            <TodoFilterControl
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </div>

          <div className="control-btn">
            <button className="btn" onClick={clearCompletedTodos}>
              Clear Completed
            </button>
          </div>
        </div>
    

      {/* For Mobile */}
      <section className="filter-control-for-mobile">
        <div className="control-btn group">
          <TodoFilterControl
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </div>
      </section>
    </>
  );
};

export default TodoList;
