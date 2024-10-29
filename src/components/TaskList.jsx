import React from "react";
import TaskItem from "./TaskItem";
import No from "../assets/no.png";

const TaskList = ({ tasks, onEditTask, onDeleteTask, onToggleComplete }) => {
  return (
    <div className="task-list-main-content-area">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
            onToggleComplete={onToggleComplete}
          />
        ))
      ) : (
        <div className="no-tasks-message">
          <img src={No} alt="" />
          <div className="no-task-message-text">
            <h3>No tasks available</h3>
            <p>Add a new task to get started!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
