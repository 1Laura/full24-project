const express = require("express");
const app = express();
// biblioteka yra kazkieno kito sukurtas modulis  https://www.npmjs.com/
const animalName = require("random-animal-name");
const getEmoji = require("./modules/emojiList");


function runRandomAnimalName() {
    const randomName = animalName();
    console.log(randomName);
}

runRandomAnimalName();


// app.get("/info/:text", (req, res) => {
//     console.log(req.params.text)
//
//     res.send({"value of param is": req.params.text})
//     // res.send({message:"all good"})
// })
//
// app.listen(2001)
// console.log("server run")