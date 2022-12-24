const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Products", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  content: DataTypes.STRING,
});

module.exports = Product;