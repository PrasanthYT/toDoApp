# Task Management App

A simple React-based task management app that lets users add, edit, complete, and delete tasks. Users can also clear all tasks at once, with completed tasks appearing at the bottom and crossed out.

## Features

- **Add Tasks**: Easily add a new task to the list.
- **Edit Tasks**: Update task names as needed.
- **Complete Tasks**: Mark tasks as completed by checking a box, which strikes them out and moves them to the bottom of the list.
- **Delete Tasks**: Delete individual tasks or clear all tasks.
- **Persisted Data**: Data is fetched from an API to populate the task list on load.

## Demo

![Deployed Link](https://prasanthtodoapp.netlify.app/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

## Usage

- **Adding a Task:** Type a task name in the input field and click "Add Task".
- **Editing a Task:** Click the edit icon next to a task, modify the name, and click "Update Task".
- **Completing a Task:** Click the checkbox next to a task to mark it as completed. The task will be crossed out and moved to the bottom.
- **Deleting a Task:** Click the delete icon next to a task.
- **Clearing All Tasks:** If there are tasks in the list, click "Clear All Tasks" to delete all tasks at once.

## Project Structure

    ```bash
    src
    ├── assets                # Images (e.g., Plus, Edit, and Delete icons)
    ├── components
    │   ├── AddTaskForm.jsx   # Form to add or edit tasks
    │   ├── TaskItem.jsx      # Single task component with edit, delete, and complete options
    │   └── TaskList.jsx      # Component to render the list of tasks
    ├── services
    │   └── api.js            # API calls to manage tasks
    └── App.jsx               # Main component
    ```

## Component Details

    ==App.jsx==

    Manages state for tasks, editing, and current task.
    Handles adding, editing, deleting, and clearing tasks.
    Sorts tasks based on completion status.

    ==AddTaskForm.jsx==
    A form to add or edit a task, with conditional rendering for the "Clear All Tasks" button.

    ==TaskList.jsx==
    Displays a list of TaskItem components.
    Shows a message when there are no tasks.

    ==TaskItem.jsx==
    Displays an individual task with options to mark complete, edit, and delete.
    Strikes out and moves the completed tasks to the bottom.

## API

The app interacts with an external API to perform CRUD operations for task management.

- Add Task
- Delete Task
- Get Tasks
- Clear All Tasks

## Styling

This app uses simple CSS for styling. Components are flexibly styled to ensure readability and ease of use.

## License
This project is open-source and available under the MIT License.

## Contact
For issues, please open an issue on the repository or reach out to the repository owner.
