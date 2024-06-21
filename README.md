Job Candidates

This project entails developing a web application for storing information about job candidates. The application comprises a back-end service with API endpoint(s) and a front-end application utilizing these back-end API endpoint(s). The primary functionality involves creating or updating candidate contact information in PostgreSQL, with an eye toward future scalability and potential database migration.

Prerequisites
Before running this project, ensure you have the following installed:

Node.js, Express.js
Angular
PostgreSQL


Follow these steps to get the project up and running on your local machine.

Backend Setup
Navigate to the backend directory:
cd backend

Install dependencies:
npm install

Configure your database connection in backend/prisma/.env
Example: DATABASE_URL="postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";

Generate prisma client and database off the schema:
npx prisma generate
npx prisma migrate dev --name job-candidate init

Run the backend server:
node server

Test the backend server:
npm test

Frontend Setup 
Navigate to the frontend directory
cd frontend\job-candidate-hub

Install dependencies:
npm install

Run the frontend server:
ng serve

Test the frontend server:
ng test

Open your browser at http://localhost:4200/candidate-form and then enjoy 🌟

