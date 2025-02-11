const {faker} = require("@faker-js/faker");

module.exports = () => {
    return (faker.location.city())
};