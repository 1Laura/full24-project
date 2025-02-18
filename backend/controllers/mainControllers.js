// controller galutine logika, jei uzklausa be jokiu klaidu
const {uid} = require("uid");
let users = [];

module.exports = {
    createUser: (req, res) => {
        const {username, password1, password2} = req.body;
        let error = null;
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            return res.send({message: "Username is already taken", error: true})
        }
        if (typeof username === "string" && username.length > 0 && username[0] !== username[0].toUpperCase()) {
            return res.send({message: "username should start with upper case letter", error: true})
        }
        if (username.length > 20 || username.length < 4) {
            return res.send({message: "username min 4, max 20 length", error: true});
        }
        if (password1.length < 3) {
            return res.send({message: "password min 3", error: true});
        }
        if (password1 !== password2) {
            return res.send({message: "don't match password", error: true});
        }

        const user = {
            ...req.body,
            secretKey: uid(),
        }

        users.push(user);
        console.log(users);
        res.send({message: "User created", error: false, users})
    },

    getUser: (req, res) => {
        console.log("sdfasfds")
        res.send({message: "ok"})
    },

    sendInfo: (req, res) => {
        console.log("info get")
        const info = {message: "this is info"}
        res.send({message: "ok", info})
    }
}