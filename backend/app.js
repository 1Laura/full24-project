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

    if (!("image" in req.body)) {//jei objekte yra keysas "image"
        return res.status(400).send({message: "no image in body", error: true});//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    }
    if (!("title" in req.body)) {
        return res.status(400).send({message: "no title in body", error: true});
    }

    const postItem = {
        ...req.body,//spred operatorius
        id: uid(),
    }
    // console.log(req.body)
    posts.push(postItem);
    res.send({message: "Post created", posts, error: false})
});

app.get("/posts", (req, res) => {
    // console.log(uid.uid(20))//nustatau id ilgi, pasitikrinu ar veikia
    res.send({posts})
})

app.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    const postExists = posts.find(post => post.id === id);
    if (!postExists) {
        return res.send({message: "Post doesn't exist"});
    }
    posts = posts.filter(post => post.id !== id)
    res.send({message: "Post deleted", posts})
});

app.listen(2002);
console.log("server run 2002")