const express = require("express");
// Jei pradedi naują projektą su modernia ES6 sintakse ir gali pakeisti package.json, naudok import. Jei dirbi su senesniu kodu, greičiausiai vis dar reikės require.
// biblioteka yra kazkieno kito sukurtas modulis  https://www.npmjs.com/
const getFakerData = require("@faker-js/faker");


function getFaker() {

    console.log(getFakerData.faker.person.firstName());
}

getFaker()

