import http from 'http'
import { } from 'dotenv/config'
import { fetchPrice } from './services/coinGecko.js'
import { fetchDataBase, updateWallet } from './services/airtable.js'

const server = http.createServer((req, res) => {

    fetchPrice().then((price) => {
        // console.log(price)
    })

    fetchDataBase().then((data) => {
        // console.log(data)
    })

    function func() {
        console.log('coucou')
    }

    // setInterval(func, 1000*5)   // mili * sec * min * heure


    // Call fetch price & Update airtable price(15 min)
    // Call fetch data & Create reccords in airtable golden book (1 / days)

    res.end('coucou')
})

server.listen(process.env.PORT)
