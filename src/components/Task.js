import { FaTimes } from "react-icons/fa";
import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task  col-8 mx-auto ${task.remainder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className="card-title">
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p className="card-subtitle mb-2 text-muted">{task.day}</p>
    </div>
  );
};

export default Task;
