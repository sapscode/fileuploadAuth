const router = require("express").Router();

const signupInitialChecks = require("../middlewares/signupChecks");
const signup = require("../controllers/signup");
const signinInitialChecks = require("../middlewares/signinChecks");
const signin = require("../controllers/signin");
const signout = require("../controllers/signout");

router.post("/signup", signupInitialChecks, signup);
router.post("/signin", signinInitialChecks, signin);
router.get("/signout", signout);

module.exports = router;
