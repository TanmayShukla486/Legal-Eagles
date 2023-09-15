const mongoose = require('mongoose');

// Creating a schema for the user database
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A user must have a username'],
  },
  email: {
    type: String,
    required: [true, 'A user must have an email id'],
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
  },
  confirmPassword: {
    type: String,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
});

// Creating a user model on the basis of the schema defined above
const User = mongoose.model('User', userSchema);
module.exports = User;
