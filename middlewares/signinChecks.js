const signinInitialChecks = (req, res, next) => {
	const { email, password } = req.body;
	if (typeof email != "string" || email.length === 0) {
		return res.status(400).json({ err: "Please enter your email" });
	}
	if (typeof password != "string" || password.length === 0) {
		return res.status(400).json({ err: "Please enter your password" });
	} else {
		next();
	}
};

module.exports = signinInitialChecks;
