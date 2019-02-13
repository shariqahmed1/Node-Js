const mongoose = require('mongoose');

var addUsers = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const Users = mongoose.model('users', addUsers);

module.exports = Users;
