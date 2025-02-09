// Jei pradedi naują projektą su modernia ES6 sintakse ir gali pakeisti package.json, naudok import. Jei dirbi su senesniu kodu, greičiausiai vis dar reikės require.
// biblioteka yra kazkieno kito sukurtas modulis  https://www.npmjs.com/
const getFakerData = require("@faker-js/faker");


function getFaker(number) {

    for (let i = 0; i < number; i++) {
        const item = {
            firstName: getFakerData.faker.person.firstName(),
            lastName: getFakerData.faker.person.lastName(),
            jobTitle: getFakerData.faker.person.jobTitle(),
            accountNumber: getFakerData.faker.finance.accountNumber(),
            avatarImage: getFakerData.faker.image.avatar(),//url()
            vehicleModel: getFakerData.faker.vehicle.model(),
            locationCity: getFakerData.faker.location.city(),
            currentDate: getFakerData.faker.date.month(),
        }
        console.log(item)
    }
}

getFaker(10)

