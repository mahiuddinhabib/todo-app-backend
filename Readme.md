# Todo App API

This is a simple Todo App API built with Express and Mongoose. It provides endpoints to manage todos and users. The API is secured with JWT authentication. The API is built following the MVC architecture.

## Features

- **Todo Management:**
  - Create a new todo
  - Get all todos
  - Get a single todo
  - Update a todo
  - Delete a todo

## Technologies

- **Express:** A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose:** A MongoDB object modeling tool designed to work in an asynchronous environment.
- **JWT:** JSON Web Token is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
- **Bcrypt:** A library to help you hash passwords.
- **Dotenv:** A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- **Jod:** A schema description language and data validator for JavaScript objects.

## API Endpoints

### Todos

- **GET /tasks:** Get all tasks
- **POST /tasks:** Create a new task
- **GET /tasks/:id:** Get a single task
- **PATCH /tasks/:id:** Update a task
- **DELETE /tasks/:id:** Delete a task

## Project Setup

Follow these steps to set up and run the project:

1. **Clone the repository:**

   **For Windows:**

   ```bash
   git clone https://github.com/mahiuddinhabib/todo-app-backend.git
   cd todo-app-backend
   ```

   **For macOS:**

   ```bash
   gh repo clone https://github.com/mahiuddinhabib/todo-app-backend.git
   cd todo-app-backend
   ```

2. **Install dependencies using [Yarn](https://yarnpkg.com/):**

   ```bash
   yarn
   ```

3. **Run the project:**
   ```bash
   yarn start
   ```

Make sure to have Git and Yarn installed globally before running the commands above.
