const animalName = require("random-animal-name");
const randomCatImage = require("random-cat-img")

function getAnimalName() {
    const name = animalName();
    console.log(name)
}

getAnimalName();

function getRandomCatImg() {
    randomCatImage().then(catImg => {
        console.log(catImg.message);
    });
}

getRandomCatImg()