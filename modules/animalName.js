const {faker} = require("@faker-js/faker");

module.exports = () => {
    return (faker.animal.petName());
};