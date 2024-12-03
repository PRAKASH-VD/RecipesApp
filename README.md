# Recipes App

A simple CRUD application for managing recipes built with Node.js, Express, MongoDB, and Mongoose. The app allows users to create, read, update, and delete recipes.

## Features

- Add new recipes with ingredients, instructions, preparation time, and cooking time.
- View a list of all recipes.
- View individual recipes by their unique ID.
- Update and delete recipes.
## API REQUEST
1.Create a new recipe by sending a POST request to http://localhost:5000/api/recipes 
2.Get all recipes by sending a GET request to http://localhost:3000/api/recipes.
3.Get a recipe by ID with a GET request to http://localhost:3000/api/recipes/{id}.
4.Update a recipe by sending a PUT request to http://localhost:3000/api/recipes/{id}.
5.Delete a recipe with a DELETE request to http://localhost:3000/api/recipes/{id}.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database to store recipe data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Nodemon**: Development tool for auto-reloading the server during development.
- **dotenv**: For managing environment variables.

## POSTMAN API REQUEST link
https://go.postman.co/workspace/3d74cf57-94ec-466c-825c-07be5f7c8a4e/overview?ctx=updates&updateId=33558

## Installation

Follow these steps to get your development environment set up:

1. Clone the repository:

   ```bash
   git clone <repository_url>

