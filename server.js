const express = require('express');
const mongoose = require('mongoose');
const db = require('./models');

// Passport
const passport = require('passport');
const session = require('express-session');

const PORT = process.env.PORT || 4000;

// Initialize Express
const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pokedex', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

// Routes
// TODO: add routes

// Start the server
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}. Visit http://localhost:${PORT}/`)
);
