# Task Hub

Welcome to Task Hub, your go-to Task Management Application built with React!

## Project Links

- [Task Hub Live Demo](https://todo-hub-dd4ec.web.app/)

## Table of Contents

- [Overview](#overview)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Overview

Task Hub is a task management application that allows users to efficiently organize their tasks. The application provides features such as adding, editing, deleting tasks, and marking tasks as completed. The user-friendly interface and responsive design make task management a breeze.

**_Note: To use Task Hub, you must first login or sign up with your Google or GitHub account._**

## Demo

![Task Hub Demo](/public/Task-Hub.png)

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

- **Add Task Modal Component:**

  - Modal/form for adding new tasks.
  - Fields include task name (required), task description, and priority level (low, medium, high).

- **Edit Task Form Component:**

  - Allows users to edit task name, description, and priority.
  - Provides an edit button for each task that routing the edit task page.

- **Delete Task:**

  - The "Delete Task" feature allows users to remove a task from their task list.

- **Sign Up or Log In:**

  - This feature provides users with the flexibility to either sign up or log in using their Google or GitHub accounts.

- **LocalStorage:**

  - Saves tasks in the browser's local storage for persistent data even after a page refresh.

- **Additional Features (Optional):**
  - Sorting tasks based on priority.
  - Pagination for the task list.

## Technologies Used

- Vite
- React Router DOM
- React-hook-form
- DaisyUi (Tailwind CSS components)
- React Icons
- SweetAlert
- react-spinners
- react-toastify
- Firebase
