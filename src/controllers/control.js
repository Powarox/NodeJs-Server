import { fetchPrice } from '../services/coinGecko.js'
import { fetchWalletDataBase, fetchCoinsListDataBase } from '../services/airtable.js'
import { updateWallet, updateCoinsList, createReccords } from '../services/airtable.js'

export function updateWalletPriceAirtable() {
    fetchWalletDataBase().then((data) => {
        fetchPrice().then((price) => {
            for(let id in data) {
                for(let j in price.data) {
                    if(data[id].PriceName === j) {
                        data[id].MarketPrice = price.data[j].usd
                        updateWallet(data[id], id)
                    }
                }
            }
        }).catch((err) => { console.log(err) })
    }).catch((err) => { console.log(err) })
}

export function updateCoinsListPriceAirtable() {
    fetchCoinsListDataBase().then((data) => {
        fetchPrice().then((price) => {
            for (let id in data) {
                for (let j in price.data) {
                    if (data[id].CoingeckoID === j) {
                        data[id].MarketPrice = price.data[j].usd
                        updateCoinsList(data[id], id)
                    }
                }
            }
        }).catch((err) => { console.log(err) })
    }).catch((err) => { console.log(err) })
}

export function createReccordAirtable() {
    let totalAmounts = 0
    let totalMarketValue = 0
    let totalTakeProfits = 0

    fetchWalletDataBase().then((data) => {
        for (let id in data) {
            totalAmounts += data[id].Amounts
            totalTakeProfits += data[id].Selled
            totalMarketValue += data[id].MarketPrice
        }
        createReccords(totalAmounts, totalTakeProfits, totalMarketValue)
    }).catch((err) => { console.log(err) })
}