const router = require("express").Router();
const { isAuthenticated, isSeller } = require("../middlewares/auth");

const getContent = require("../controllers/getcontent");
const upload = require("../controllers/upload")

router.post("/create", isAuthenticated, isSeller, upload);
router.get("/get/all", isAuthenticated, getContent);

module.exports = router;
