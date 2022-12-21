const router = require("express").Router();

const signupInitialChecks = require("../middlewares/signupChecks");
const signup = require("../controllers/signup");
const signinInitialChecks = require("../middlewares/signinChecks");
const signin = require("../controllers/signin");

router.post("/signup", signupInitialChecks, signup);
router.post("/signin", signinInitialChecks, signin);

module.exports = router;
