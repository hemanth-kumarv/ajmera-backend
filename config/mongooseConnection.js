const mongoose = require("mongoose");
const { UsersSchema } = require("../models/UsersSchema");

module.exports = new Promise(async (resolve, reject) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ajmera-Test");

    const Users = mongoose.model("users", UsersSchema);
    resolve({ Users });
  } catch (error) {
    console.log("error :>> ", error);
    reject(error);
  }
});
