const express = require("express");
const app = express();
const getEmoji = require("./modules/emojiList");

app.get("/some", (req, res) => {
    function getRandomEmoji() {
        const emojiList = getEmoji();
        const randomIndex = Math.floor(Math.random() * emojiList.length);
        return emojiList[randomIndex];
    }
    const randomEmoji = getRandomEmoji();

    res.send(randomEmoji)
})

app.listen(2001)
console.log("server run")