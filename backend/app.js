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

// let users = [];
// app.post("/create", (req, res) => {
//     // validacijos
//
//     const {username, age, gender, race} = req.body;//issitraukiu keyssus is objekto
//
//     let error = null;
//     console.log(req.body)
//     if (typeof username === "string" && username.length > 0 && username[0] !== username[0].toUpperCase()) error = "username should start with upper case letter";
//     if (username.length > 20 || username.length < 4) error = "username min 4, max 20 length";
//
//     if (Number(age) < 18 || Number(age) > 80) error = "age must be more than 18 and less than 80";
//
//     if (gender !== "male" && gender !== "female") error = "gender can be male, or female";
//     // if (race === "asian") error = "asian are not allowed here, for now";
//
//     if (race !== "european" && race !== "african" && race !== "indian") error = "european, african, indian allowed";
//
//     if (error) return res.send({message: error, error: true})
//
//     // const userItem = {
//     //     ...req.body,//spred operatorius
//     //     id: uid(),
//     // }
//     // console.log(req.body)
//     users.push({username, age, gender, race});
//     res.send({message: "User created", error: false, users})
// });

// app.get("/posts", (req, res) => {
//     // console.log(uid.uid(20))//nustatau id ilgi, pasitikrinu ar veikia
//     res.send({posts})
// })
//
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