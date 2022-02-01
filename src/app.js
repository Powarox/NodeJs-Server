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
    

    res.end('coucou')
})

server.listen(process.env.PORT)
