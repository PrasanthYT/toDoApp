import React from "react";
import Edit from "../assets/edit.png";
import Delete from "../assets/cross.png";

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="tasks-list-area-main">
      <div className="tasks-list-area-main-left">
        <input
          type="checkbox"
          name="tasks"
          id="tasks"
          className="check"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.name}
        </p>
      </div>
      <div className="tasks-list-area-main-right">
        {task.completed ? (
          <img src={Delete} alt="Delete" onClick={() => onDelete(task.id)} />
        ) : (
          <>
            <img src={Edit} alt="Edit" onClick={() => onEdit(task)} />
            <img src={Delete} alt="Delete" onClick={() => onDelete(task.id)} />
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
