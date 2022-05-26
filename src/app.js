import http from 'http'
import { } from 'dotenv/config'
import { fetchPrice } from './services/coinGecko.js'
import { fetchDataBase, updateWallet, createReccords } from './services/airtable.js'

const server = http.createServer((req, res) => {
    console.log('Server is working...');

    function updatePriceAirtable() {
        console.log('Start to update price...');
        fetchDataBase().then((data) => {
            fetchPrice().then((price) => {
                // for(let id in data) {
                //     for(let j in price.data) {
                //         if(data[id].PriceName === j) {
                //             data[id].MarketPrice = price.data[j].usd
                //             updateWallet(data[id], id)
                //         }
                //     }
                // }
                console.log(price);
                console.log('Update finish !');
            }) 
        })
    }

    updatePriceAirtable();

    function createReccordAirtable() {
        console.log('Create new reccord of total value...');
        let totalAmounts = 0
        let totalMarketValue = 0
        let totalTakeProfits = 0

        fetchDataBase().then((data) => {
            for(let id in data) {
                totalAmounts += data[id].Amounts
                totalTakeProfits += data[id].Selled
                totalMarketValue += data[id].MarketPrice
            }
            createReccords(totalAmounts, totalTakeProfits, totalMarketValue)
        })
    }

    // setInterval(updatePriceAirtable, 1000*60*15) 
    // setInterval(createReccordAirtable, 1000*60*60*24)  

    res.end('NodeJs server is runing !')
})

server.listen(process.env.PORT)
