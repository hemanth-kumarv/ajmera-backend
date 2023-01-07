const {
  getUsersListService,
} = require("../../../service/v1/user/getUsersListService");

const getUsersList = async (req, res) => {
  try {
    const users = await getUsersListService();

    return res.status(200).json({
      statusCode: 200,
      isSuccess: true,
      message: "Successfully retrieved users list",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      isSuccess: false,
      message: error?.message,
      data: null,
    });
  }
};

module.exports = { getUsersList };
