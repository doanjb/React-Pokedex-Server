const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/', (req, res) => {
  // Create a new user using req.body
  User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

module.exports = router;
