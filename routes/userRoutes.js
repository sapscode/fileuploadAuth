const router = require("express").Router();

const registerInitialChecks = require("../middlewares/registerChecks");
const register = require("../controllers/register");

router.post("/signup", registerInitialChecks, register);

module.exports = router;
