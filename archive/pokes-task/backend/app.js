const express = require("express");
const app = express();
const cors = require("cors");
const {uid} = require("uid");
const mainRouter = require("./router/routes");
const bcrypt = require('bcrypt')
app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3001/"
// }));
app.use(express.json())//sitas nustatymas leidzia pasiimi duomenis is req.body(is post metodo)

app.use("/", mainRouter);//visos uzklausos keliauja i endpointa


// app.get("/delete/:id", (req, res) => {
//     const id = req.params.id;
//     const postExists = posts.find(post => post.id === id);
//     if (!postExists) {
//         return res.send({message: "Post doesn't exist"});
//     }
//     posts = posts.filter(post => post.id !== id)
//     res.send({message: "Post deleted", posts})
// });

app.listen(2001);
console.log("server run 2001");

function register() {
    const userPassword = "slaptas123";
    bcrypt.genSalt(5, (err, salt) => {

        bcrypt.hash(userPassword, salt, (err, hash) => {
            console.log(hash)//hash dedam i users array
            // Store hash in your password DB.
        });
    });
}

function login() {
    const userPassword = "slaptas123";
    const userPasswordHash = "hash";
    bcrypt.compare(userPassword, hash, (err, result) => {
        console.log(hash)//hash dedam i users array
        // Store hash in your password DB.
    });
}
