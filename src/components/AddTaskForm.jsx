import React, { useEffect, useState } from "react";
import Plus from "../assets/Plus.png";

const AddTaskForm = ({
  onAddTask,
  isEditing,
  task,
  onEditTask,
  onClearAllTasks,
  tasks,
}) => {
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    if (isEditing && task) {
      setTaskName(task.name);
    }
  }, [isEditing, task]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim()) {
      if (isEditing) {
        onEditTask(task.id, taskName);
      } else {
        onAddTask(taskName);
      }
      setTaskName("");
    }
  };

  return (
    <div className="add-task-form-main-area">
      <div className="add-new-task-form-area">
        <img src={Plus} alt="" />
        <p>Add new Task</p>
      </div>
      <form onSubmit={handleSubmit} className="add-new-task-button-form-area">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder={isEditing ? "Edit task" : "Add a new task"}
          required
        />
        <button className="btn-primary" type="submit">
          {isEditing ? "Update Task" : "Add Task"}
        </button>
        {/* Conditionally render Clear All Tasks button if there are tasks */}
        {tasks.length > 0 && (
          <button
            className="btn-danger"
            type="button"
            onClick={onClearAllTasks}
          >
            Clear All Tasks
          </button>
        )}
      </form>
    </div>
  );
};

export default AddTaskForm;
