# Task Hub

Welcome to Task Hub, your go-to Task Management Application built with React!

## Project Links

- [Task Hub Live Demo](https://your-task-hub-demo-link.com/)

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Overview

Task Hub is a task management application that allows users to efficiently organize their tasks. The application provides features such as adding, editing, deleting tasks, and marking tasks as completed. The user-friendly interface and responsive design make task management a breeze.

## Demo

![Task Hub Demo](demo.gif)

## Project Structure

The project is structured as follows:

- `/src`: Contains the source code of the React application.
  - `/components`: Reusable React components.
  - `/pages`: Individual pages for React Router.
- `/public`: Static assets such as images and icons.
- `/build`: Output directory for the production build.
- `package.json`: Project configuration and dependencies.
- `README.md`: Project documentation.

## Features

- **Task List Component:**

  - Displays a list of tasks with task names and completion status.
  - Allows users to mark tasks as completed with a checkbox.
  - Provides a button to delete tasks, with a visual indication for completed tasks.

- **Add Task Modal/Form Component:**

  - Modal/form for adding new tasks.
  - Fields include task name (required), task description, and priority level (low, medium, high).

- **Edit Task Modal/Form Component:**

  - Allows users to edit task name, description, and priority.
  - Provides an edit button for each task that opens the edit task modal/form.

- **Routing:**

  - Implements React Router for seamless navigation between task list, add task, and edit task pages.

- **State Management:**

  - Uses React state within each component to manage their respective functionalities.
  - Context or state lifting is employed to share state between components.

- **LocalStorage:**

  - Saves tasks in the browser's local storage for persistent data even after a page refresh.

- **Styling:**

  - Applies responsive design using Tailwind CSS for a visually appealing and user-friendly interface.

- **Bonus Features (Optional):**
  - Sorting tasks based on priority or completion status.
  - Pagination for the task list.

## Technologies Used

- React
- React Router DOM
- React-hook-form
- DaisyUi (Tailwind CSS components)
- React Icons
- SweetAlert

## Getting Started

To get started with Task Hub locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.

For more detailed instructions, refer to the [Getting Started](#getting-started) section in the documentation.

## Development

If you want to contribute to Task Hub, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## Contributing

We welcome contributions! Read the [Contribution Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE).
