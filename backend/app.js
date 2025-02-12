const express = require("express");
const app = express();
const cors = require("cors");
const {faker} = require("@faker-js/faker");

app.use(cors());
// app.use(cors({
//     origin:"http://localhost:3001/"
// }));

app.use(express.json())//sitas nustatymas leidzia pasiimi duomenis is req.body(is post metodo)
const posts = [];
app.post("/create", (req, res) => {
    console.log(req.body)
    posts.push(req.body);
    res.send({message: "Post created"})
})

app.listen(2002);
console.log("server run 2002")