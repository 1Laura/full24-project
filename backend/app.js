const express = require("express");
const app = express();
const cors = require("cors");
const {uid} = require("uid");
app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3001/"
// }));
app.use(express.json())//sitas nustatymas leidzia pasiimi duomenis is req.body(is post metodo)

let posts = [];
app.post("/create", (req, res) => {
    const postItem = {
        ...req.body,//spred operatorius
        postId: uid(),
    }
    console.log(req.body)
    posts.push(req.body);
    res.send({message: "Post created"})
});

app.get("/posts", (req, res) => {
    // console.log(uid.uid(20))//nustatau id ilgi, pasitikrinu ar veikia
    res.send({posts})
})

app.post("/deletePost/:postId", (req, res) => {
    const deletePostId = req.params.postId;
    const postExists = posts.find(post => post.id === deletePostId);
    if (!postExists) {
        return res.send({message: "Post doesn't exist"});
    }
    posts = posts.filter(post => post.id === deletePostId)
    res.send({message: "Post deleted"})
});

app.listen(2002);
console.log("server run 2002")