const express = require('express');
const mongoose = require('mongoose');
const db = require('./models');

// passport
const passport = require('passport');
const session = require('express-session');

const PORT = process.env.PORT || 4000;

// initialize express
const app = express();

// middleware: body parser requests body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware: passport
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/middleware/passport')(passport, db);

// connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pokedex', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

// Routes
// TODO: add routes

// start the server
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}. Visit http://localhost:${PORT}/`)
);
