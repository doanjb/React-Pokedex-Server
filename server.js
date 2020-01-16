const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./models');

// passport
const passport = require('passport');
const session = require('express-session');

// initialize express
const app = express();
const PORT = process.env.PORT || 4000;

// middleware: body parser requests body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware: passport
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/middleware/passport')(passport, db);

// middleware: allow cors
app.use(cors());

// connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pokedex', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

// Routes
// TODO: add routes
require('./routes/auth')(app, passport);
require('./routes/user')(app, db);

// start the server
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}. Visit http://localhost:${PORT}/`)
);

module.exports = app;
