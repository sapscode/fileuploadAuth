const express = require("express");
const app = express();
const { PORT } = require("./config/index");
const { sequelize } = require("./config/db");

app.use(express.json());
app.use(express.static("content"));
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
