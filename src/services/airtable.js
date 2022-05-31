import { airtableBase } from '../api/connexion.js'

export async function fetchWalletDataBase() {
    return new Promise((result) => {
        airtableBase('Wallet').select({
            view: "Grid view"
        }).eachPage(response => {
            let data = {}
            for (let res in response) {
                data[response[res].id] = {
                    Name: response[res].fields['Name'],
                    Amounts: response[res].fields['Amounts'],
                    Selled: response[res].fields['Selled'],
                    MarketValue: response[res].fields['Market Value'],
                    MarketPrice: response[res].fields['Market Price'],
                    PriceName: response[res].fields['Price Name'],
                }
            }
            result(data);
        })
    }).catch(err => { console.log(err) })
}

export async function fetchCoinsListDataBase() {
    return new Promise((result) => {
        airtableBase('Coins List').select({
            view: "Grid view"
        }).eachPage(response => {
            let data = {}
            for (let res in response) {
                data[response[res].id] = {
                    Name: response[res].fields["Name"],
                    CoingeckoID: response[res].fields["Coingecko ID"],
                    MarketPrice: response[res].fields["Market Price"],
                };
            }
            result(data);
        })
    }).catch(err => { console.log(err) })
}

export function updateWallet(data, id) {
    airtableBase('Wallet').update([{
        "id": id,
        "fields": {
            "Market Price": data.MarketPrice,
        }
    }],
    function (err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function (record) { });
    });
}

export function updateCoinsList(data, id) {
    airtableBase('Coins List').update([{
        "id": id,
        "fields": {
            "Market Price": data.MarketPrice,
        }
    }],
    function (err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function (record) { });
    });
}

export function createReccords(totalAmounts, totalTakeProfits, totalMarketValue) {
    airtableBase('Wallet History').create([{
        "fields": {
            "Total Amounts": totalAmounts,
            "Total Market Value": totalMarketValue,
            "Total Take Profits $": totalTakeProfits,
        }
    }],
    function (err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function (record) { });
    });
}



            