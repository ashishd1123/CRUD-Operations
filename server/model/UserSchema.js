const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: {
      type: String,
      required: true,
      trim: true
  },
  email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true
  },
  position: {
      type: String,
      required: false,
      trim: true
  },
  phone: String,
  gender: {
      type: String,
      trim: true
  },
  confirmation: {
      type: Boolean,
      trim: true
  }
});

module.exports = mongoose.model("todos", UserSchema);
