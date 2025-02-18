const express = require("express");
const router = express.Router();
// const mainController = require("../controllers/mainControllers");
// router.get("/user", mainController.getUser);
const {
    createUser,
    getUser,
    sendInfo
} = require("../controllers/mainControllers");

router.post("/register", createUser)
router.get("/login", getUser);
router.get("/info", sendInfo);

module.exports = router;