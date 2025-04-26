# Architecture and Data Flow

## Backend Stack
- **Node.js** and **Express.js** serve the API endpoints.
- **MongoDB** is the database, storing expense records.
- **Mongoose** ORM manages MongoDB schema and queries.

### Backend Endpoints
- `POST /expenses` - Create a new expense.
- `GET /expenses` - Retrieve all expenses.
- `PUT /expenses/:id` - Update an expense by ID.
- `DELETE /expenses/:id` - Delete an expense by ID.

## Frontend Stack
- **React** for UI components.
- **axios** for HTTP requests to backend APIs.
- Chart library (e.g., **Chart.js** or **Recharts**) for data visualization.

## Data Flow
1. User interacts with React UI (adds, edits, deletes expenses).
2. React uses axios to call backend API.
3. Backend performs database operations with Mongoose on MongoDB.
4. API responses are sent back to React.
5. React updates the UI and renders charts based on current data.

## Key Components
- **Backend**: API routes, Mongoose models, server setup.
- **Frontend**: Components for expense list, add/edit form, dashboard with charts.
- **Database**: Expense documents with fields (amount, category, description, date).
