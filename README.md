# GMG_website
website booking service app with inventory and employee management project. Just for fun with 2 more people i know

# Website Prototype Project Setup Guide

**Date:** May 28, 2025

Welcome to the **GMG Website** project! This guide will help you set up the project on your local machine using the MERN stack (MongoDB, Express, React, Node.js) with React, Vite, TypeScript, SWC, and Tailwind CSS. Follow these steps to install the required apps, configure your environment, and start collaborating with the team using GitHub, Trello, and Figma.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [VS Code Extensions](#vs-code-extensions)
3. [Cloning the Repository](#cloning-the-repository)
4. [Setting Up the Frontend](#setting-up-the-frontend)
5. [Setting Up the Backend](#setting-up-the-backend)
6. [Running the Project](#running-the-project)
7. [Testing the Setup](#testing-the-setup)
8. [Using Collaboration Tools](#using-collaboration-tools)
9. [Working with GitHub](#working-with-github)
10. [Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher (we recommend v22.14.0). Download from [nodejs.org](https://nodejs.org).
- **Git**: For version control. Download from [git-scm.com](https://git-scm.com).
- **Visual Studio Code (VS Code)**: Our recommended IDE. Download from [code.visualstudio.com](https://code.visualstudio.com).
- **MongoDB Atlas Account**: Required for the database. Ask the team lead to add you to the team's MongoDB Atlas project.
- **Terminal**: Use Bash, PowerShell, or Git Bash (for Windows users).
- **GitHub Access**: Ensure you have access to the project repository (e.g., `https://github.com/<your-org>/wellness-coffee-lounge`).

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
   cd ~/Projects
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/<your-org>/wellness-coffee-lounge.git
   ```
   Replace `<your-org>` with the actual organization or username.

3. Navigate into the project folder:
   ```bash
   cd wellness-coffee-lounge
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

3. Create a `.env` file:
   ```bash
   touch .env
   ```

4. Add your MongoDB Atlas URI to the `.env` file (ask the team lead for the connection string):
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/wellness-coffee-lounge?retryWrites=true&w=majority
   ```

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
   cd ~/Projects/wellness-coffee-lounge/frontend
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:5173 in your browser to see the app.

---

## Testing the Setup

### Frontend Test:
1. Go to http://localhost:5173/bookings.
2. Fill out the booking form (e.g., Name: "Test User", Service: "Coffee Tasting", Date: a future date).
3. Submit and check for a success message.

### Backend Test:
1. Use Postman to send a POST request to http://localhost:5000/api/bookings:
   ```json
   {
     "name": "Test User",
     "service": "Coffee Tasting",
     "date": "2025-06-01T10:00:00Z"
   }
   ```
2. Expect a 201 status and a response with the saved booking.

---

## Using Collaboration Tools

### Trello
- **Access**: Ask the team lead for the Trello board link.
- **How to Use**:
  - Check the "To Do" column for tasks assigned to you.
  - Move tasks to "In Progress" when working on them.
  - Move completed tasks to "Done".
  - Add comments or questions to task cards.

### Figma
- **Access**: Ask the team lead for the Figma design file link.
- **How to Use**:
  - Reference designs for styling components.
  - Use Figma's color codes and spacing in Tailwind CSS classes.
  - Leave comments on designs for feedback.

---

## Working with GitHub

1. Create a Feature Branch:
   ```bash
   git checkout -b feature/<your-feature-name>
   ```
   Example: `git checkout -b feature/add-login-page`

2. Make Changes and Commit:
   ```bash
   git add .
   git commit -m "Add login page component with form"
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
   - Assign reviewers and link to Trello task if applicable.

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
  - Ensure your IP is allowlisted in MongoDB Atlas.

- **Tailwind CSS Not Working**:
  - Verify `tailwind.config.js` exists.
  - Restart dev server: `npm run dev`.

- **Port Already in Use**:
  ```bash
  lsof -i :5000
  kill -9 <PID>
  ```

---

## Final Notes

- Keep `.env` files out of Git (they contain sensitive data).
- Refer to [Tailwind CSS Docs](https://tailwindcss.com/docs) for styling help.
- Test your setup with the booking form before starting new work.

Happy coding, and welcome to the Wellness and Coffee Lounge team! 🚀
```

This README.md file includes all the necessary setup instructions, formatted with proper Markdown syntax for headings, code blocks, and lists. I've also fixed some minor formatting issues from the original content and added an emoji at the end for a friendly touch.