const express = require("express");
const app = express();
const { PORT } = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
