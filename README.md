
## Project Overview

This project consists of a Yoga Admission Form with both client-side and server-side components. The structure includes a client directory for the front-end application and a server directory for the back-end functionality.

### Client

The client directory contains the front-end application built using React. The `yoga-class-admission` subdirectory includes the main application code, public assets, and package information.

- **Public:** Contains the HTML entry point (`index.html`).
- **Src:** Contains React components (`components`), styling, and application configuration.
- **Package.json:** Defines project dependencies.
- **Package-lock.json:** Lock file for precise dependency versions.

### Server

The server directory contains the back-end logic implemented using Node.js. It includes modules for configuration, controllers for handling business logic, models for data structures, and routes for API endpoints.

- **Src:**
  - **Config:** Configuration files, such as `db.js` for database setup.
  - **Controllers:** Business logic implementations.
  - **Models:** Data models, e.g., `User.js`.
  - **Routes:** API routes, e.g., `admissionRoutes.js`.
- **Index.js:** Entry point for the server.
- **Package.json:** Defines server dependencies.
- **Package-lock.json:** Lock file for precise dependency versions.

## Getting Started

1. **Client Setup:**
   - Navigate to the `client/yoga-class-admission` directory.
   - Install dependencies: `npm install`.
   - Start the client: `npm start`.

2. **Server Setup:**
   - Navigate to the `server` directory.
   - Start the server: `node index.js`.

3. **Open in Browser:**
   - Open your web browser and visit the specified URL for the client application.
