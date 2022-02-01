const http = require("http")
const fetchPrice = require('./index.js')

const server = http.createServer((req, res) => {

    /*
    * Fetch crypto price with coinGecko
    *
    * @result list crypto price
    */
    let data = fetchPrice()
    data.then((price) => {
        console.log(price)
    })

    res.end('coucou')
})

server.listen(4000) // process.env.PORT ||
