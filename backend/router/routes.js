const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainControllers");

router.get("/user", mainController.getUser)

module.exports = router;