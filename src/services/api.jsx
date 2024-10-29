const tasks = [];

export const getTasks = () => Promise.resolve([...tasks]);

export const addTask = (taskName) => {
  const newTask = { id: Date.now(), name: taskName };
  tasks.push(newTask);
  return Promise.resolve(newTask);
};

export const deleteTask = (taskId) => {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index > -1) tasks.splice(index, 1);
  return Promise.resolve();
};

export const deleteAllTasks = () => {
  tasks.length = 0;
  return Promise.resolve();
};
