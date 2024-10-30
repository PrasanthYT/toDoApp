import React, { useEffect, useRef, useState } from "react";
import { deleteAllTasks, deleteTask, getTasks } from "./services/api";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import Logo from "./assets/Logo.png";
import User from "./assets/avatar.png";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);
  
  const handleAddTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId).then(() =>
      setTasks((prev) => prev.filter((task) => task.id !== taskId))
    );
  };

  const handleDeleteAllTask = () => {
    deleteAllTasks().then(() => setTasks([]));
  };

  const handleEditTask = (taskId, newName) => {
    const updateTask = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(updateTask);
    setIsEditing(false);
    setCurrentTask(null);
  };

  const startEditing = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
    inputRef.current.focus();
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);
  const filteredTasks = sortedTasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav>
        <div className="main-page-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="main-page-user-area">
          <p>Guest</p>
          <img src={User} alt="" />
        </div>
      </nav>
      <div className="welcome-user-with-total-task">
        <div className="welcome-user-left-area">
          <h2>
            Welcome, <span>Guest.</span>
          </h2>
          <p>
            You&apos;ve got {tasks.filter((task) => !task.completed).length} tasks to
            do
          </p>
        </div>
        <div className="welcome-user-right-area">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Task..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <AddTaskForm
        onAddTask={handleAddTask}
        isEditing={isEditing}
        task={currentTask}
        onEditTask={handleEditTask}
        onClearAllTasks={handleDeleteAllTask}
        tasks={tasks}
        inputRef={inputRef}
      />
      <TaskList
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={startEditing}
        onToggleComplete={handleToggleComplete}
      />
    </>
  );
};

export default App;
