import http from 'http'
import fetchPrice from './services/coinGecko.js'

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

    console.log(process.env.AIRTABLE_SECRET_KEY)

    res.end('coucou')
})

server.listen(process.env.PORT || 4000) // process.env.PORT ||
