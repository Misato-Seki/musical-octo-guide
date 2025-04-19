# Project phase 2 - Basic structure and main functionalities

This document provides a detailed summary of the project's second phase(current situation), focusing on its architecture and core functionalities.

## 1. Environment
- **Current**: The project can be run **locally** using Node.js and PostgreSQL.
- **Future**: The project will be deployed using Cloud service.

## 2. Backend
- **Express.js** is used to define API routes and handle HTTP requests.

Here is a link to the server setup file: [server.js](./backend/server.js)

The server can be started by running the following command in the terminal from the `backend` directory:

```bash
node server.js
```

## 3. Frontend

- **React**: The core library used for building the user interface.
- **Next.js**: Next.js handles routing through its file-based routing system.
- **TypeScript**: Used for type safety.
- **TailwindCSS**: A utility-first CSS framework used for styling.

Here is a link to the main entry point for the frontend: [page.tsx](./frontend/app/page.tsx)

To start the frontend development server, navigate to the `frontend` directory and run the following command:

```bash
npm run dev
```

## 4. Database

- **PostgreSQL** is used as the database.
- **Database Connection**: The connection to the PostgreSQL database is managed using the `pg` library in Node.js.
- **Schema Management**: The database schema is designed to store information about skills, projects, and experiences.

Here is a link to the database configuration file: [db.js](./backend/db.js) / [schema.js](./backend/models/schema.js)

## 5. Basic structure and architecture

- **Backend**: Built using Node.js and Express.js. It currently provides the `/api/skills` endpoint, which allows retrieving all skill information and registering new skill data.
- **Frontend**: Built using React, Next.js, TypeScript, and TailwindCSS. Currently, it retrieves and displays skill information from the `/api/skills` endpoint.
- **Database**: Built using PostgreSQL. The database currently includes schemas for skills, projects, skill-project relationships, and experiences.

## 6. Functionalities

Currently, only a functionality (displaying skills) has been implemented as the project is still in the basic structure design phase. The following features are planned for future implementation:

- **Skill Management**: Users can add, update, and delete skills. These skills are displayed on the portfolio page.
- **Project Showcase**: Users can showcase their projects with details such as title, description, and links to live demos or repositories.
- **Experience Timeline**: Users can add professional experiences, which are displayed in a timeline format.
- **Responsive Design**: The application is fully responsive, ensuring a seamless user experience across devices.
- **API Integration**: The frontend communicates with the backend through RESTful APIs to fetch and update data dynamically.


## 7. Code quality and documentation

- **Linting and Formatting**: Tools like ESLint and Prettier are used to enforce coding standards and maintain consistent formatting.
- **Type Safety**: TypeScript is used throughout the project to catch errors during development and improve code readability.
- **Version Control**: Git is used to track changes, and meaningful commit messages are written to provide context for each change.

## 8. Testing and error handling

Currently, no specific tests or error-handling mechanisms have been implemented as the project is still in the basic structure design phase. The following tests and error-handling features are planned for future implementation.

- **CI/CD pipeline**: Implement automated testing in the CI/CD pipeline to verify that the application builds and deploy successfully to the cloud environment.
- **Backend**: Use centralized error handling in Express.js to manage validation and server errors. Log errors for debugging purposes.
- **Frontend**: Display user-friendly error messages for API failures and use React Error Boundaries to handle UI crashes.

## 9. User interface and interaction
Currently, no specific UI/UX considerations have been made as the project is still in the basic structure design phase. The following UI/UX improvements are planned for the future:

- **Intuitive Navigation**: The application will feature a clean and intuitive navigation system, allowing users to access different sections effortlessly.
- **Interactive Elements**: Buttons and other interactive elements will be styled and animated to enhance user engagement.
- **Accessibility**: The UI will be designed to be accessible, following best practices such as proper color contrast and keyboard navigation support.
- **Consistent Design**: TailwindCSS will be used to maintain a consistent design system across the application, ensuring a professional and polished look.
