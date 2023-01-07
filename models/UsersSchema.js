const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsersSchema = new Schema({
  id: Number,
  email: String,
  first_name: String,
  last_name: String,
  avatar: String,
});

module.exports = { UsersSchema };
