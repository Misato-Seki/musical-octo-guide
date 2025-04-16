# Project phase 2 - Basic structure and main functionalities

This document provides a detailed summary of the project's second phase, focusing on its architecture, core functionalities, and development practices. It highlights the environment setup, backend and frontend implementation, database configuration, and key design principles that ensure scalability and maintainability.

## 1. Environment

The development environment is set up for local development. It is also prepared for future deployment to a cloud service. Below is an overview of the current setup:

- **Local Development**: The project can be run locally using Node.js and PostgreSQL. This allows developers to test and iterate quickly without needing to deploy changes to a remote server.
- **Version Control**: The codebase is managed using Git and hosted on GitHub. This ensures that all changes are tracked, and collaboration among team members is streamlined.
- **Environment Variables**: Sensitive information such as database connection strings are managed using environment variables. These are stored in a `.env` file during local development and are configured in the cloud service for deployment.
- **Deployment**: The application will be designed for deployment on Google Cloud Platform. It will be configured to use the Google Cloud Run service, which provides a fully managed platform for containerized applications. 

## 2. Backend

The backend server is implemented using Node.js and Express.js. It is responsible for handling API requests to manage skills, projects, and experiences. Below is a brief overview of how the server is set up:

- **Express.js** is used to define API routes and handle HTTP requests.
- **CORS** middleware is applied to allow cross-origin requests.
- **PostgreSQL** is used as the database, with connection managed by a connection pool.

Here is a link to the server setup file: [server.js](./backend/server.js)

The server can be started by running the following command in the terminal from the `backend` directory:

```bash
node server.js
```

## 3. Frontend

The frontend of the project is implemented using modern web development technologies, including React, TailwindCSS, TypeScript, and Next.js. Below is an overview of the frontend setup:

- **React**: The core library used for building the user interface. It enables the creation of reusable components and efficient rendering.
- **Next.js**: Next.js handles routing through its file-based routing system, making navigation between pages seamless.
- **TypeScript**: Used for type safety and better developer experience, ensuring fewer runtime errors and improved code maintainability.
- **TailwindCSS**: A utility-first CSS framework used for styling. It allows for rapid UI development with a consistent design system.

Here is a link to the main entry point for the frontend: [page.tsx](./frontend/app/page.tsx)

To start the frontend development server, navigate to the `frontend` directory and run the following command:

```bash
npm run dev
```

This will launch the application in development mode, typically accessible at `http://localhost:3000`.

## 4. Database

The project uses **PostgreSQL** as its database management system. It is chosen for its robustness, scalability, and support for advanced features such as JSON data types and full-text search. Below is an overview of the database setup:

- **Database Connection**: The connection to the PostgreSQL database is managed using the `pg` library in Node.js. A connection pool is utilized to efficiently handle multiple database queries and ensure optimal performance.
- **Database Configuration**: The database connection details, such as host, port, user, password, and database name, are stored in environment variables. These are loaded using the `dotenv` package to keep sensitive information secure.
- **Schema Management**: The database schema is designed to store information about skills, projects, and experiences. Tables are normalized to reduce redundancy and ensure data integrity.
- **Query Execution**: SQL queries are executed using parameterized queries to prevent SQL injection attacks. The `pg` library provides methods to execute queries and handle results efficiently.

Here is a link to the database configuration file: [db.js](./backend/db.js)

## 5. Basic structure and architecture

The project follows a modular architecture to ensure scalability and maintainability. Each module is designed to handle a specific aspect of the application, such as the backend, frontend, and database. Below is an overview of the basic structure:

- **Backend**: The backend is structured into controllers, services, and routes. This separation of concerns ensures that business logic, API endpoints, and data handling are clearly delineated.
- **Frontend**: The frontend is organized into reusable components, pages, and styles. This structure promotes code reusability and simplifies the development of new features.
- **Database**: The database schema is normalized and designed to support the application's core functionalities. Relationships between tables are defined using foreign keys to maintain data integrity.

## 6. Functionalities

The project includes the following core functionalities:

- **Skill Management**: Users can add, update, and delete skills. These skills are displayed on the portfolio page.
- **Project Showcase**: Users can showcase their projects with details such as title, description, and links to live demos or repositories.
- **Experience Timeline**: Users can add professional experiences, which are displayed in a timeline format.
- **Responsive Design**: The application is fully responsive, ensuring a seamless user experience across devices.
- **API Integration**: The frontend communicates with the backend through RESTful APIs to fetch and update data dynamically.


## 7. Code quality and documentation

Code quality is maintained through the following practices:

- **Linting and Formatting**: Tools like ESLint and Prettier are used to enforce coding standards and maintain consistent formatting.
- **Type Safety**: TypeScript is used throughout the project to catch errors during development and improve code readability.
- **Documentation**: The codebase will be documented using comments and README files. API endpoints will be documented to assist developers in understanding the backend services.
- **Version Control**: Git is used to track changes, and meaningful commit messages are written to provide context for each change.

## 8. Testing and error handling

- **CI/CD pipeline**: Implement automated testing in the CI/CD pipeline to verify that the application builds and deploy successfully to the cloud environment.
- **Backend**: Use centralized error handling in Express.js to manage validation and server errors. Log errors for debugging purposes.
- **Frontend**: Display user-friendly error messages for API failures and use React Error Boundaries to handle UI crashes.

## 9. User interface and interaction

The user interface will be designed with a focus on simplicity and usability:

- **Intuitive Navigation**: The application will feature a clean and intuitive navigation system, allowing users to access different sections effortlessly.
- **Interactive Elements**: Buttons and other interactive elements will be styled and animated to enhance user engagement.
- **Accessibility**: The UI will be designed to be accessible, following best practices such as proper color contrast and keyboard navigation support.
- **Consistent Design**: TailwindCSS will be used to maintain a consistent design system across the application, ensuring a professional and polished look.
