const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateItems = require('../modules/generateItems')

const users = [];
const items = [];//bus objektai su items-inventorius
const notifications = [];

module.exports = {
    registerUser: (req, res) => {
        const {username, password} = req.body;

        const existsUser = users.find(user => user.username === username);

        if (existsUser) {
            res.send({message: "User exists", error: true, success: false});
        }
        const user = {username};

        bcrypt.genSalt(5, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                // console.log(err, hash)
                user.password = hash;
                // res.send({message: "register", error: false, users});
            });
        });
        users.push(user);
        console.log(generateItems());

        const userItems = {username, inventory: generateItems()};
        items.push(userItems);

        res.send({message: "register", error: false, success: true, users});
    },

    loginUser: (req, res) => {
        const {username, password} = req.body;

        const myUser = users.find(user => user.username === username);
        if (!myUser) return res.send({message: "User not found", error: true, success: false})

        bcrypt.compare(password, myUser.password, (err, result) => {//password, userPasswordHash ->pirmas passwordas is frontendo kur atsiunte useris, antras is users array
            if (!result) return res.send({message: "incorrect password", error: true, success: false})
            let user = {...myUser};
            delete user.password; //password is array
            const token = jwt.sign(user, process.env.SECRET_KEY);
            // console.log(token);
            return res.send({message: "user logged in", error: false, success: true, token});
        })
    },

    getInventory: (req, res) => {
        const {user} = req.body;//user objekte yra iconai su id, ir token
        console.log(user)
        return res.send({error: false, success: true})
    }
}
