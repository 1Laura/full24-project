// Jei pradedi naują projektą su modernia ES6 sintakse ir gali pakeisti package.json, naudok import. Jei dirbi su senesniu kodu, greičiausiai vis dar reikės require.
// biblioteka yra kazkieno kito sukurtas modulis  https://www.npmjs.com/
const carInfo = require("./modules/carInfo");
const getCatImage = require("./modules/catImage")
const getAnimalName = require("./modules/animalName");
const getLocation = require("./modules/location");


async function getFaker() {
    const catImg = await getCatImage();
    const animalName = getAnimalName();
    const location = getLocation();
    console.log(`My cat name is ${animalName} ,we live in ${location}, here is image of my cat: ${catImg}`)
}

getFaker()

