const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const signin = async (req, res) => {
	const { email, password } = req.body;
	try {
		const isExistingUser = await User.findOne({ where: { email } });
		if (!isExistingUser) {
			return res.status(404).json({ err: "User not found" });
		}

		const passwordMatch = await bcrypt.compare(
			password,
			isExistingUser.password
		);
		if (!passwordMatch) {
			return res.status(404).json({ err: "Incorrect password" });
		}

		res.status(200).json({
			status: "ok",
			message: `Congratulations ${isExistingUser.name}`
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ err: err.message });
	}
};

module.exports = signin;
