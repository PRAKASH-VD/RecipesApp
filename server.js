const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config(); // Load .env variables

connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON requests

// Routes
app.use('/api/recipes', recipeRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

//const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 5001; // Use a different port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


