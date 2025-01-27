const getRandomEmoji = require('./modules/emojiList');
const getRandomName = require('./modules/nameList');
const getRandomAge = require('./modules/randomNumber');
const animalName = require("random-animal-name");
const randomCatImage = require("random-cat-img")

function createUser() {
    const user = {
        emoji: getRandomEmoji(),
        age: getRandomAge(100),
        name: getRandomName()
    };
    return user;
}

function doStuff() {
    const user = createUser();
    console.log(user);
}

doStuff();


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