import { airtableBase } from '../api/connexion.js'

export async function fetchDataBase() {
    return new Promise((result) => {
        airtableBase('Wallet').select({
            view: "Grid view"
        }).eachPage(response => {
            let data = {}
            for (let res in response) {
                data[response[res].id] = {
                    'Name': response[res].fields['Name'],
                    'MarketPrice': response[res].fields['Market Price'],
                    'PriceName': response[res].fields['Price Name'],
                }
            }
            result(data)
        })
    })
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

export function createReccords(data) {
    airtableBase('Wallet History').create([{
        "fields": {
            "Total Amounts": data.amounts,
            "Total Market Value": data.marketValue,
            "Total Take Profits $": data.takeProfits,
        }
    }],
    function (err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function (record) { });
    });
}



            