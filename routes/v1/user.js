const express = require("express");
const router = express.Router();

const { getUsersList, addNewUser } = require("../../controllers/v1/user");

// GET
router.get("/", getUsersList);

// POST
router.post("/", addNewUser);

module.exports = router;
