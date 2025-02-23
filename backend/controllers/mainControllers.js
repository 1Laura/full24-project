const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const users = [];
const userPosts = [];

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

                if (result) {
                    delete myUser.password; //istrina keys is myUser, password
                    const token = jwt.sign(myUser, process.env.SECRET_KEY);
                    console.log(token);
                    return res.send({message: "user logged in", error: false, token})
                } else {
                    return res.send({message: "incorrect password", error: true})
                }
            })
        } else {
            return res.send({message: "user doesn't exist", error: true})
        }
    },
    createPost: (req, res) => {
        const userToken = req.headers.authorization;
        jwt.verify(userToken, process.env.SECRET_KEY, async (err, user) => {
            console.log(user);

            if (user) {
                const {email, username} = user;
                const {title, description} = req.body;
                userPosts.push({title, description, email, username});
                return res.send({message: "created post", error: false, userPosts})
            } else {
                return res.send({message: "doesn't found user", error: true})
            }
        })
        return res.send({message: "doesn't found user", error: true})
    }

}