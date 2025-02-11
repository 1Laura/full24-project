
module.exports = (url) => {
    return new Promise(resolve => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data)//isiunciam atgal
            })
    })
}