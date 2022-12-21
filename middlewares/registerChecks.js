const { validateEmail, validatePassword } = require("../utils/validate");

const registerInitialChecks = (req, res, next) => {
	const { name, email, password, isSeller } = req.body;
	if (
		typeof name == "string" &&
		typeof email == "string" &&
		typeof password == "string" &&
		typeof isSeller == "boolean" &&
		name.length > 0 &&
		email.length > 0 &&
		password.length > 0 &&
		validateEmail(email) &&
		validatePassword(password)
	) {
		next();
	} else {
		res.status(400).send("Initial checks failed");
	}
};

module.exports = registerInitialChecks;
