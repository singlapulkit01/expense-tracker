# Expense Tracker

## Project Description
A full-stack expense tracker app allowing users to add, edit, delete expenses, and visualize spending patterns with charts.

---

## Installation

### Backend
1. Navigate to the backend folder:
cd backend
2. Install dependencies:
npm install
3. Create a `.env` file in the backend folder with:
MONGODB_URI=your_mongodb_connection_string PORT=5000
4. Start the backend server:
npm start

### Frontend
1. Navigate to the frontend folder:
cd frontend
2. Install dependencies:
npm install
3. Start the frontend development server:
npm start

---

## Environment Variables

- `MONGODB_URI` - Your MongoDB connection string.
- `PORT` - Backend server port (default 5000).

---

## How to Run

1. Start MongoDB service.
2. Start backend: `npm start` inside the backend directory.
3. Start frontend: `npm start` inside the frontend directory.
4. Access the frontend at: `http://localhost:3000`.

---

## Testing the Application

- Add, edit, and delete expenses through the UI.
- Check if data updates correctly in the UI and backend.
- View dashboard charts for visual insights.
- Use curl or Postman to test backend API endpoints manually.

---

## Known Issues / Limitations

- No authentication implemented (optional).
- No persistent session management.
- Some UI elements may not be fully responsive on all device sizes.