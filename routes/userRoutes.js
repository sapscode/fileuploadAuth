const router = require("express").Router();
const User = require("../models/userModel");

router.post("/signup", (req, res) => {
	const { name, email, password, isSeller } = req.body;
  
});

module.exports = router;
