const router = require("express").Router();
const { isAuthenticated, isSeller } = require("../middlewares/auth");

router.post("/create", isAuthenticated, isSeller);

module.exports = router;
