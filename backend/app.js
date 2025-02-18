const express = require("express");
const app = express();
const cors = require("cors");
const {uid} = require("uid");
const mainRouter = require("./router/routes");
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
console.log("server run 2001")