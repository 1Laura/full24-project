const {uid} = require("uid");
const bcrypt = require("bcrypt");
const users = [];

module.exports = {
    registerUser: (req, res) => {
        const {email, username, password} = req.body;
        const user = {email, username};
        const existUser = users.find(user => user.username === username && user.email === email)
        if (existUser) {
            res.send({message: "User exist", error: true});
        } else {
            bcrypt.genSalt(5, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    user.userPasswordHash = hash;
                    // console.log("register " + hash)//hash dedam i users array
                    // Store hash in your password DB.

                });
            });
            users.push(user);
            res.send({message: "register", error: false, users});
        }
    },

    loginUser: (req, res) => {
        const {username, password} = req.body;
        const myUser = users.find(user => user.username === username);
        if (myUser) {
            bcrypt.compare(password, myUser.userPasswordHash, (err, result) => {//password, userPasswordHash ->pirmas passwordas is frontendo kur atsiunte useris, antras is users array
                console.log(result)//hash dedam i users array
                // Store hash in your password DB.
                if (result) {
                    return res.send({message: "user logged in", error: false, users});
                } else {
                    return res.send({message: "incorrect password", error: true})
                }
            })
        } else {
            return res.send({message: "user doesn't exist", error: true})
        }
    }
}