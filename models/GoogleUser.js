const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  googleId: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  }
});

module.exports = User = mongoose.model("users_google", userSchema);
