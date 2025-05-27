
# GMG Website - Project Setup Guide

**Date:** May 28, 2025

Welcome to the **GMG Website** project! This guide will help you set up the project on your local machine using the MERN stack (MongoDB, Express, React, Node.js) with React, Vite, TypeScript, SWC, and Tailwind CSS. Follow these steps to install the required apps, configure your environment, and start collaborating with the team using GitHub.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [VS Code Extensions](#vs-code-extensions)
3. [Cloning the Repository](#cloning-the-repository)
4. [Setting Up the Frontend](#setting-up-the-frontend)
5. [Setting Up the Backend](#setting-up-the-backend)
6. [Running the Project](#running-the-project)
7. [Testing the Setup](#testing-the-setup)
8. [Working with GitHub](#working-with-github)
9. [Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher (we recommend v22.14.0). Download from [nodejs.org](https://nodejs.org).
- **Git**: For version control. Download from [git-scm.com](https://git-scm.com).
- **Visual Studio Code (VS Code)**: Our recommended IDE. Download from [code.visualstudio.com](https://code.visualstudio.com).
- **MongoDB**: Either:
  - MongoDB Atlas account (ask the team lead for access)
  - Local MongoDB installation (version 6.0 or higher)
- **Terminal**: Use Bash, PowerShell, or Git Bash (for Windows users).
- **GitHub Access**: Ensure you have access to the project repository: [GMG_website](https://github.com/Jamsekun/GMG_website/tree/develop)

---

## VS Code Extensions

To improve your development experience, install these extensions in VS Code:

- **Tailwind CSS IntelliSense**: Autocompletion and linting for Tailwind CSS.
- **ESLint** (optional): Linting for JavaScript/TypeScript code.
- **Prettier - Code formatter** (optional): Consistent code formatting.
- **React Snippets** (optional): Speed up React development with snippets.

### How to Install Extensions:
1. Open VS Code.
2. Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac) to open the Extensions panel.
3. Search for each extension and click **Install**.

---

## Cloning the Repository

1. Open your terminal and navigate to your preferred directory:
   ```bash
   cd C:\James_folder\embedded_projects\Startup_Company
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/Jamsekun/GMG_website.git GMG_website-1
   ```

3. Navigate into the project folder:
   ```bash
   cd GMG_website-1
   ```

4. Switch to the develop branch:
   ```bash
   git checkout develop
   ```

---

## Setting Up the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Verify key files exist:
   - `src/main.tsx`
   - `src/App.tsx`
   - `src/index.css`
   - `tailwind.config.js`
   - `postcss.config.cjs`

---

## Setting Up the Backend

1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file if it doesn't exist:
   ```bash
   touch .env
   ```

4. Add your MongoDB configuration to the `.env` file:
   ```env
   # For MongoDB Atlas
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/gq-good-coffee?retryWrites=true&w=majority
   
   # For local MongoDB
   MONGODB_URI=mongodb://localhost:27017/gq-good-coffee
   
   PORT=5000
   ```
   Replace `<username>` and `<password>` with your credentials.

---

## Running the Project

### Start the Backend:
1. In the backend directory:
   ```bash
   node index.js
   ```
2. Visit http://localhost:5000 in your browser to confirm it's running (should display "Server is up").

### Start the Frontend:
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd C:\James_folder\embedded_projects\Startup_Company\GMG_website-1\frontend
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:5173 in your browser to see the app.

---

## Testing the Setup

### Frontend Test:
1. Navigate through the website pages to ensure they load correctly.
2. Test any interactive components (forms, buttons, etc.).

### Backend Test:
1. Use Postman or curl to test API endpoints:
   ```bash
   curl http://localhost:5000/api/example
   ```
2. Verify you receive the expected response.

---

## Working with GitHub

1. Create a Feature Branch:
   ```bash
   git checkout -b feature/<your-feature-name>
   ```
   Example: `git checkout -b feature/add-contact-page`

2. Make Changes and Commit:
   ```bash
   git add .
   git commit -m "Add contact page component with form"
   ```

3. Push to GitHub:
   ```bash
   git push origin feature/<your-feature-name>
   ```

4. Create a Pull Request (PR):
   - Go to the GitHub repository.
   - Click "Pull requests" > "New pull request".
   - Select your branch and compare with `develop`.
   - Add a title and description, then submit.
   - Assign reviewers if applicable.

5. Stay Updated:
   ```bash
   git checkout develop
   git pull origin develop
   ```

---

## Troubleshooting Common Issues

- **"npm install" Fails**:
  - Ensure Node.js v18+ (`node -v`).
  - Clear cache and retry:
    ```bash
    npm cache clean --force
    npm install
    ```

- **MongoDB Connection Error**:
  - Check your `MONGODB_URI` in `.env`.
  - For local MongoDB, ensure the service is running.
  - For Atlas, ensure your IP is allowlisted.

- **Tailwind CSS Not Working**:
  - Verify `tailwind.config.js` exists.
  - Restart dev server: `npm run dev`.

- **Port Already in Use**:
  ```bash
  lsof -i :5000  # Linux/Mac
  netstat -ano | findstr :5000  # Windows
  kill -9 <PID>  # or use Task Manager on Windows
  ```

---

## Final Notes

- Keep `.env` files out of Git (they contain sensitive data).
- Refer to [Tailwind CSS Docs](https://tailwindcss.com/docs) for styling help.
- Test your changes thoroughly before creating PRs.

Happy coding sa atin! 🚀
```
