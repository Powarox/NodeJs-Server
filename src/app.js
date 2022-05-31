import http from 'http';
import { } from 'dotenv/config';
import { fetchPrice } from './services/coinGecko.js';
import { fetchWalletDataBase, fetchCoinsListDataBase } from './services/airtable.js';
import { updateWallet, updateCoinsList, createReccords } from './services/airtable.js';

import { sendMail } from './tests/tests.js';

const server = http.createServer((req, res) => {
    console.log("Server is working...");

    function updateWalletPriceAirtable() {
        console.log("Start to update wallet price...");
        fetchWalletDataBase().then((data) => {
            fetchPrice().then((price) => {
                for(let id in data) {
                    for(let j in price.data) {
                        if(data[id].PriceName === j) {
                            data[id].MarketPrice = price.data[j].usd;
                            updateWallet(data[id], id);
                        }
                    }
                }
                console.log("Update finish !");
            });
        });
    }

    function updatecoinsListPriceAirtable() {
        console.log("Start to update coins list price...");
        fetchCoinsListDataBase().then((data) => {
            fetchPrice().then((price) => {
                for (let id in data) {
                    for (let j in price.data) {
                        if (data[id].CoingeckoID === j) {
                            data[id].MarketPrice = price.data[j].usd;
                            updateCoinsList(data[id], id);
                        }
                    }
                }
            });
        });
    }

    function createReccordAirtable() {
        console.log("Create new reccord of total value...");
        let totalAmounts = 0;
        let totalMarketValue = 0;
        let totalTakeProfits = 0;

        fetchWalletDataBase().then((data) => {
            for (let id in data) {
                totalAmounts += data[id].Amounts;
                totalTakeProfits += data[id].Selled;
                totalMarketValue += data[id].MarketPrice;
            }
            createReccords(totalAmounts, totalTakeProfits, totalMarketValue);
        });
    }

    // updateWalletPriceAirtable();
    // updatecoinsListPriceAirtable();
    // createReccordAirtable();

    setInterval(sendMail, 1000*60);

    setInterval(updateWalletPriceAirtable, 1000*60);
    setInterval(updatecoinsListPriceAirtable, 1000*60);
    setInterval(createReccordAirtable, 1000*60*60*24);

    res.end("NodeJs server is runing !");
})

server.listen(process.env.PORT);








