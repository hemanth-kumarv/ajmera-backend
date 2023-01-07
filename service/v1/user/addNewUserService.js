const mongooseConnection = require("../../../config/mongooseConnection");

const addNewUserService = async (data) => {
  const { Users } = await mongooseConnection;
  const newRow = new Users(data);
  await newRow.save();
  return newRow;
};

module.exports = { addNewUserService };
