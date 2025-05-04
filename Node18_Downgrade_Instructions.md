# Node.js 18.x Downgrade and Setup Instructions for Swiggy Photo Search Feature

## Why Downgrade Node.js?
The photo-search-service backend uses `@tensorflow/tfjs-node` which currently does not support Node.js v20 on Windows. Downgrading to Node.js 18.x LTS ensures compatibility and smooth installation of dependencies.

---

## Step 1: Download and Install Node.js 18.x

- Download the Windows installer for Node.js 18.x LTS from the official site:
  https://nodejs.org/en/download/releases/

- Choose the latest 18.x version (e.g., 18.17.1) and download the Windows Installer (.msi).

- Run the installer and follow the prompts to install Node.js 18.x.

- Verify installation by opening a new terminal and running:
  ```
  node -v
  ```
  It should output something like `v18.17.1`.

---

## Step 2: Clean and Reinstall Dependencies in photo-search-service

- Open a terminal and navigate to the backend directory:
  ```
  cd "C:\Users\yashh\Desktop\swiggy new feature\swiggy\apps\photo-search-service"
  ```

- Remove existing `node_modules` and `package-lock.json`:
  ```
  rm -rf node_modules package-lock.json
  ```

- Install dependencies fresh:
  ```
  npm install
  ```

- Install multer explicitly (if needed):
  ```
  npm install multer
  ```

---

## Step 3: Start the Backend Server

- Run the backend server:
  ```
  npm start
  ```

- You should see logs indicating the server is running and connected to MongoDB.

---

## Step 4: Setup and Start Frontend (swiggy-app)

- Open a new terminal and navigate to the frontend directory:
  ```
  cd "C:\Users\yashh\Desktop\swiggy new feature\swiggy\apps\swiggy-app"
  ```

- Install dependencies (use legacy peer deps to avoid conflicts):
  ```
  npm install --legacy-peer-deps
  ```

- Start the frontend development server:
  ```
  npm start
  ```

---

## Optional: Use nvm for Windows to Manage Node Versions

- Install nvm for Windows from:
  https://github.com/coreybutler/nvm-windows/releases

- After installing nvm, you can install and switch Node versions easily:
  ```
  nvm install 18.17.1
  nvm use 18.17.1
  ```

- This allows switching between Node versions without reinstalling.

---

## Summary

- Downgrade Node.js to 18.x for TensorFlow compatibility.
- Clean and reinstall backend dependencies.
- Start backend and frontend servers separately.
- Optionally use nvm for easier Node version management.

If you want, I can help you with the nvm installation and usage commands next.
