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
  favorites: [
    {
      // Store ObjectIds in the array
      type: mongoose.Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Pokemon model
      ref: 'Pokemon'
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
