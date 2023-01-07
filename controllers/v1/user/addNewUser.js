const {
  addNewUserService,
} = require("../../../service/v1/user/addNewUserService");

const addNewUser = async (req, res) => {
  const { id, first_name, last_name, email } = req.body;
  try {
    const users = await addNewUserService({ id, first_name, last_name, email });
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

module.exports = { addNewUser };
