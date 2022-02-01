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
        console.log('coucou');
    }

    // setInterval(func, 1000*5)   // mili * sec * min * heure
    

    res.end('coucou')
})

server.listen(process.env.PORT)
