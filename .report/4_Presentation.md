# Phase 4 – Project Presentation

<!-- > [!NOTE]  
> Think of this as presenting your project, which you can include in your job application. The presentation should be clear and concise. Explain the entire project. Don't be afraid to highlight failures, as everyone has experienced them at some point. Consider that the viewer may not have a strong technical background.  
>   
> **You can do this entire presentation in English or Finnish.** -->

## 🎯 Project title

API-Based Portfolio Management Tool

---

## 📝 Project overview

This project aims to create a portfolio website along with an admin panel to manage the data displayed on the site. I already had a portfolio, but updating information required modifying the code directly, which was inconvenient. To solve this, I’m developing an admin panel that allows easy data management, and the frontend will fetch and display this data via an API.

---

## 📌 Use case summary

[1_Definition_and_Planning.md](1_Definition_and_Planning.md)

| Use Case                                   | Implemented (Yes/No) | Demonstration / Notes                |
|---------------------------------------------|----------------------|--------------------------------------|
| User adds a new skill                      | Yes                  | Added via admin panel, reflected immediately         |
| User adds a new project                    | Yes                  | Added via admin panel, reflected immediately         |
| User adds a new experience                 | Yes                  | Added via admin panel, reflected immediately         |
| Visitor views portfolio                    | Yes                  | Dynamically displayed on public page                |
| Admin logs in                              | Yes                  | Secure authentication implemented                  |
| Admin deletes/edits skills, projects, etc. | Yes                  | Edit and delete functionality available                    |

<!-- _Add explanations for each use case, including demo timestamps if using video._ -->

---

## ✍️ Technical implementation

<!-- _Describe technologies used, architectural decisions, and how key features were implemented._ -->
### Admin Panel
- **Google Cloud Compute Engine**: Virtual machine (acts as a server)
- **Coolify**: Self-hosting support tool
- **Directus**: Headless CMS(Contents Management System)
- **PostgreSQL**: Database
- The Admin Panel is made by self-hosting **Directus** using **Coolify** within a virtual machine deployed on **Google Cloud Compute Engine**. The Docker setup for Directus specifies **PostgreSQL** as the database, which handles content storage and retrieval.

### Portfolio Page
- **React**: UI library for building interactive components
- **Next.js**: Framework for server-side rendering and routing
- **TypeScript**: Statically-typed JavaScript for improved code quality
- **TailwindCSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for React
- **Vercel**: Deployment platform optimized for Next.js applications
- The Portfolio Page is built using **React** and **Next.js**, with **TypeScript** for type safety and **TailwindCSS** for responsive styling. **Framer Motion** is used to add smooth animations, while **Vercel** is used to deploy the application.

---

## 🚂 Development process

<!-- _Summarize your progress from start to finish, mentioning key decisions or changes along the way._ -->
1. Initial Wireframing with Paper and Pen.
2. Considered developing the admin panel using Node.js and Express.js.
    - Decided against it due to the time required for development.
3. Considered using a CMS for admin panel development
    - Determined that using Google Cloud Virtual Machine, Coolify, and Directus CMS would be the most optimal solution.
    - It would allow for relatively easy and quick data management.
4. Used Directus to create the Admin Panel and entered information such as skills, projects, and work experience.
    - The data can be transferred to the Portfolio Page via an API.
5. Developed the Portfolio Page UI and integrated the API.


---

## ☀️ Reflection and future work

<!-- _What worked well? What challenges did you face? What would you add or improve in the future?_ -->
- All the planned features are working correctly.
- When I installed Coolify on a virtual machine in Google Cloud (GC) and used it to deploy Directus, I had a problem. Even though I followed the setup steps, the UI did not appear in the browser, and I got a 404 error. I found out that Google Cloud’s firewall was blocking external access. After I changed the firewall rules to open the correct port, the problem was solved.
- Right now, my portfolio website has a very minimal design. However, a portfolio is important for showing my skills. In the future, I want to add more graphic elements and improve the design to better show my design abilities.

---

## 📊 Work Hours Log

<!-- _You can copy from the logbook here._ -->

| Date  | Used hours | Subject(s) |  outcome |
| :---  |     :---:      |     :---:      |     :---:      |
| 27.3.2025 | 4.5 | Planning the phase 1  | Create project plan, Setup Github Project  |
| 8.4.2025 | 1.5 | wireframing  | create figma design  |
| 9.4.2025 | 2 | setup(backend)  | create database and a few api  |
| 10.4.2025 | 2 | setup(frontend)  | create frontend and connect with backend  |
| 11.4.2025 | 2 | setup(database)  | change db fromtSQLite to PostgreSQL  |
| 16.4.2025 | 3 | Planning the phase 2  | report writing  |
| 19.4.2025 | 1 | Planning the phase 2  | report fixing  |
| 21.4.2025 | 2          | deploy admin/portfolio page | search how to deploy admin page      |
| 22.4.2025 | 4          | deploy admin/portfolio page | search how to deploy admin page      |
| 23.4.2025 | 2          | deploy admin/portfolio page | create VM(Google Cloud), install coolify |
| 24.4.2025 | 2          | deploy admin/portfolio page | deploy directus                      |
| 27.4.2025 | 0.5        | deploy admin/portfolio page | deploy portfolio page                |
| 28.4.2025 | 4          | create portfolio page ui    | create navbar, home page, skill page ui |
| 29.4.2025 | 3.5        | create portfolio page ui    | create ptoject page ui               |
| 30.4.2025 | 5          | create portfolio page ui    | integrate API                        |
| 1.5.2025  | 4          | create portfolio page ui    | create experience page ui            |
| 3.5.2025  | 4          | create portfolio page ui    | create contact page ui, change file structure |
| 4.5.2025  | 4        | Phase 3 and 4    | report writing, responsive design               |
| **Total**  | **55h** |                                 |   |

---

## 🪢 Presentation link

_Add a link to your video presentation or state that it was presented live._