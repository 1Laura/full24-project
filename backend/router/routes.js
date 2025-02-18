const express = require("express");
const router = express.Router();
// const mainController = require("../controllers/mainControllers");
// router.get("/user", mainController.getUser);
const {
    createUser,
    getUser,
    getAllUsers,
} = require("../controllers/mainControllers");

router.post("/register", createUser)
router.post("/login", getUser);
router.get("/allUsers", getAllUsers)

module.exports = router;