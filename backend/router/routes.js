const express = require("express");
const router = express.Router();
// const mainController = require("../controllers/mainControllers");
// router.get("/user", mainController.getUser);
const {
    registerUSer,
    loginUser,
    getAllUsers,
    pokeUser,
} = require("../controllers/mainControllers");

router.post("/register", registerUSer)
router.post("/login", loginUser);
router.get("/allUsers", getAllUsers);
router.get("/poke", pokeUser)

module.exports = router;