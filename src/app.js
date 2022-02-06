import http from 'http'
import { } from 'dotenv/config'
import { fetchPrice } from './services/coinGecko.js'
import { fetchDataBase, updateWallet } from './services/airtable.js'

const server = http.createServer((req, res) => {

    function updatePriceAirtable() {
        console.log('Start to update price...');
        fetchDataBase().then((data) => {
            fetchPrice().then((price) => {
                for(let id in data) {
                    for(let j in price.data) {
                        if(data[id].PriceName === j) {
                            data[id].MarketPrice = price.data[j].usd
                            updateWallet(data[id], id)
                        }
                    }
                }
                console.log('Update finish !');
            }) 
        })
    }

    function createReccordAirtable() {
        // Call fetch data & Create reccords in airtable golden book (1 / days)
    }

    // setInterval(updatePriceAirtable, 1000*20) 
    // setInterval(createReccordAirtable, 1000*60*60*24)  


    res.end('NodeJs server is runing !')
})

server.listen(process.env.PORT)
