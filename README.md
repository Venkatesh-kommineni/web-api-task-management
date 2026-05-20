# web-api-team-task-hub
Handles the back-end service for task management 

## Installation

Clone the repository and install dependencies with 

npm install

Start the development server with:
npm run dev

This uses ts-node-dev to run the backend on:
http://localhost:3000/api-docs

Execute all unit tests with:
npm test

Project Structure

src/
  app.ts          # Express app entry point
  routes/         # API routes
  middleware/     # Error handlers, CORS, etc.
  services/       # Business logic
  config/         # Swagger configuration
tests/            # Unit test cases
