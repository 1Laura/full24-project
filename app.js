const express = require("express");
// Jei pradedi naują projektą su modernia ES6 sintakse ir gali pakeisti package.json, naudok import. Jei dirbi su senesniu kodu, greičiausiai vis dar reikės require.
const app = express();
// biblioteka yra kazkieno kito sukurtas modulis  https://www.npmjs.com/
const animalName = require("random-animal-name");
const getRandomCat = require("random-cat-img");


function runRandomAnimalName() {
    const randomName = animalName();
    console.log(randomName);
}

runRandomAnimalName();

function randomCatImages() {
    const randomCat = getRandomCat().then(data => console.log(data.message));
    console.log(randomCat);
}

randomCatImages()

// app.get("/info/:text", (req, res) => {
//     console.log(req.params.text)
//
//     res.send({"value of param is": req.params.text})
//     // res.send({message:"all good"})
// })
//
// app.listen(2001)
// console.log("server run")