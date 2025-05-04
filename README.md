# Swiggy New Feature - Photo-Based Food Search

![Swiggy Photo Search](./docs/images/photo-search-banner.png)

## Overview
This project introduces a photo-based food search feature to the Swiggy platform. Users can upload a photo of a dish, and the system will classify the dish and return a list of restaurants serving that dish.

## Feature Details

### Backend (photo-search-service)
- Built with Node.js and Express.
- Uses TensorFlow.js with a pre-trained model to classify dishes from uploaded photos.
- Connects to MongoDB to fetch restaurants serving the classified dish.
- API endpoint: `/api/photo-search` accepts photo uploads and returns restaurant results.
- Requires Node.js 18.x for compatibility with TensorFlow native bindings on Windows.

### Frontend (swiggy-app)
- React-based web application.
- Provides a user interface to upload photos and display search results.
- Components:
  - `PhotoSearchButton`: Button to trigger photo upload.
  - `DishResultsList`: Displays list of restaurants serving the identified dish.
  - `PhotoSearchPage`: Page integrating the photo upload and results display.
- Communicates with backend API to perform photo-based search.

## Project File Structure

```
swiggy-new-feature/
├── apps/
│   ├── photo-search-service/       # Backend service
│   │   ├── src/
│   │   │   ├── controllers/        # Business logic (dish classification, restaurant controller)
│   │   │   ├── routes/             # API routes
│   │   │   └── index.js            # Entry point for backend
│   │   ├── package.json            # Backend dependencies and scripts
│   │   └── ml-model/               # Pre-trained ML model and labels
│   ├── swiggy-app/                 # Frontend React app
│   │   ├── src/
│   │   │   ├── components/         # React components (PhotoSearchButton, DishResultsList)
│   │   │   └── pages/              # React pages (photo-search.jsx)
│   │   ├── package.json            # Frontend dependencies and scripts
│   │   └── public/                 # Static assets
├── README.md                      # This file
└── Node18_Downgrade_Instructions.md  # Node.js downgrade and setup guide
```


## Setup Instructions

### Backend
1. Navigate to `swiggy/apps/photo-search-service`.
2. Ensure Node.js version is 18.x (LTS).
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the backend server.

### Frontend
1. Navigate to `swiggy/apps/swiggy-app`.
2. Run `npm install --legacy-peer-deps` to install dependencies.
3. Run `npm start` to start the frontend development server.

## Notes
- The backend uses TensorFlow.js native bindings which have compatibility issues with Node.js v20 on Windows. Downgrade to Node.js 18.x to avoid installation errors.
- The feature requires a running MongoDB instance accessible at the configured URI (default: `mongodb://localhost:27017/swiggy`).

## Testing the Feature
- Open the frontend app in a browser.
- Navigate to the Photo Search page.
- Click "Search by Photo" button and upload a dish photo.
- View the list of restaurants serving the identified dish.

## Future Improvements
- Add support for more dishes and improve classification accuracy.
- Enhance UI/UX for better user interaction.
- Add caching and performance optimizations.
