const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 6,
    required: true
  },
  favorites: [Number]
});

module.exports = mongoose.model('User', UserSchema);
