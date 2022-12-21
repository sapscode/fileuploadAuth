const express = require("express");
const app = express();
const { PORT } = require("./config/index");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(express.static("content"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
