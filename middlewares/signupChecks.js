const { validateEmail, validatePassword } = require("../utils/validate");

const signupInitialChecks = (req, res, next) => {
	const { name, email, password } = req.body;
	if (
		typeof name == "string" &&
		typeof email == "string" &&
		typeof password == "string" &&
		name.length > 0 &&
		email.length > 0 &&
		password.length > 0 &&
		validateEmail(email) &&
		validatePassword(password)
	) {
		next();
	} else {
		res.status(400).json({err : "Initial checks failed"});
	}
};

module.exports = signupInitialChecks;
