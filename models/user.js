const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  // Define schema fields here
});
const User = mongoose.model('User', userSchema);
module.exports = User;
