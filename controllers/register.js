const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
	const { name, email, password, isSeller } = req.body;
	try {
		const isExistingUser = await User.findOne({ where: { email } });
		if (isExistingUser) {
			res.status(500).json(`User ${isExistingUser.name} already exists`);
		} else {
			const encPassword = await bcrypt.hash(password, 10);
			const newUser = await User.create({
				name,
				email: email.toLowerCase(),
				password: encPassword,
				isSeller: isSeller || false
			});

			res.status(200).json({
				status: "ok",
				message: `Welcome to the store ${newUser.name}. Thank you for signing up`
			});
		}
	} catch (e) {
		console.log(e.message);
		res.status(500).json({ e: e.message });
	}
};

module.exports = register;
