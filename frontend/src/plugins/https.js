
module.exports = (url) => {
    return new Promise(resolve => {
        // get
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data)//isiunciam atgal
            })
    })
}