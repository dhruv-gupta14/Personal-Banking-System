const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// hash the plain text password
UserSchema.pre("save", async function (next) {
  const user = this;
  //console.log('Before Saving')
  if (user.isModified("password")) {
    // will check if new user is there or updating password
    user.password = await bcrypt.hash(user.password, 8);
  }
  next(); // importtant to call this to tell function to stop and move out of function
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
