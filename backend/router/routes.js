const express = require("express");
const router = express.Router();
// const mainController = require("../controllers/mainControllers");
// router.get("/user", mainController.getUser);
const {
    createUser,
    getUser
} = require("../controllers/mainControllers");

router.post("/register", createUser)
router.post("/login", getUser);


module.exports = router;