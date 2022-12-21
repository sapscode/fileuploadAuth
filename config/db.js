const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testDB", "saps", "12345", {
	host: "./config/db.sqlite",
	dialect: "sqlite"
});

sequelize.sync();

(async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (err) {
		console.error("Unable to connect to the database:", err);
	}
})();

module.exports = sequelize;