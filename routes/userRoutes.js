const router = require("express").Router();
const User = require("../models/userModel");

const registerInitialChecks = require("../middlewares/registerChecks");
const register = require("../controllers/register");

router.post("/signup", registerInitialChecks, register);

module.exports = router;
