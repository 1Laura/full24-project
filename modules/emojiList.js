module.exports=()=> {
    const emojiList = ["☀️", "🌙", "⭐", "☁️", "🌈", "🌳"];
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    return emojiList[randomIndex];
}