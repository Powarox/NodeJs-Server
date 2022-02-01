import airtableBase from '../api/connexion.js'

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

export function updateWallet(info) {
    airtableBase('Wallet').update([{
        "id": info.id,
        "fields": {
            "Amounts": state.data[info.id].Amounts + info.amounts,
            "Coins": state.data[info.id].Coins + info.quantity,
        }
    }],
    function (err, records) {
        if (err) { console.error(err); return; }
        records.forEach(function (record) { console.log(record.getId()); });
    });
}

