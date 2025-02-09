// Jei pradedi naują projektą su modernia ES6 sintakse ir gali pakeisti package.json, naudok import. Jei dirbi su senesniu kodu, greičiausiai vis dar reikės require.
// biblioteka yra kazkieno kito sukurtas modulis  https://www.npmjs.com/
const carInfo = require("./modules/carInfo");


function getFaker() {

    const info = carInfo();
    console.log(info)
}

getFaker()

