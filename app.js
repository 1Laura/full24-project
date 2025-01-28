const express = require("express");
const app = express();
const getEmoji = require("./modules/emojiList");

app.get("/info/:text", (req, res) => {
    console.log(req.params.text)

    res.send({"value of param is": req.params.text})
    // res.send({message:"all good"})
})

app.listen(2001)
console.log("server run")