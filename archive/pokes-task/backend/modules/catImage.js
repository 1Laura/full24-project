const getRandomCatImage = require("random-cat-img");

module.exports = async () => {
    const catImage = await getRandomCatImage();
    return (catImage.message);
};