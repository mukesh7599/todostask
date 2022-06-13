import React from "react";

const TodoFilterControl = ({ filterStatus, setFilterStatus }) => {
  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  return (
    <div className="control-btn group">
      <button
        className={filterStatus === "all" ? "btn active" : "btn"}
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      <button
        className={filterStatus === "active" ? "btn active" : "btn"}
        onClick={() => handleFilter("active")}
      >
        Inprogress
      </button>
      <button
        className={filterStatus === "completed" ? "btn active" : "btn"}
        onClick={() => handleFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilterControl;
