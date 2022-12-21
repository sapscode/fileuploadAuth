const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("Users", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allownull: false
	},
	email: {
		type: DataTypes.STRING,
		allownull: false
	},
	password: {
		type: DataTypes.STRING,
		allownull: false
	},
	isSeller: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
});

module.exports = User;
