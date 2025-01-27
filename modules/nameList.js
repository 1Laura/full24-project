module.exports =()=>{
    const nameList = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace'];
    const randomIndex = Math.floor(Math.random() * nameList.length);
    return nameList[randomIndex];
}