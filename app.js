const getRandomEmoji = require('./modules/emojiList');
const getRandomName = require('./modules/nameList');
const getRandomAge = require('./modules/randomNumber')

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

