const {faker} = require("@faker-js/faker");
module.exports = () => {
    return {
        model: faker.vehicle.model(),
        fuel: faker.vehicle.fuel(),
        type: faker.vehicle.type(),
    }
};