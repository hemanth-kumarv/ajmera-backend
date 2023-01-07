const mongooseConnection = require("../../../config/mongooseConnection");

const getUsersListService = async () => {
  const { Users } = await mongooseConnection;
  const rows = await Users.find();
  return rows;
};

module.exports = { getUsersListService };
