import airtableBase from '../api/connexion.js'

// Fetch all data of Wallet from Airtable
export function fetchDataBase() {
    airtableBase('Wallet').select({
        view: "Grid view"
    }).eachPage(response => {
        let data = {};
        for (let res in response) {
            data[response[res].id] = {
                'Name': response[res].fields['Name'],
                'MarketPrice': response[res].fields['Market Price'],
                'PriceName': response[res].fields['Price Name'],
            }
        }
        return data;
    },
    function done(err) {
        if (err) { console.error(err); return; }
    });
}

// Create TransactionBuy and update Wallet
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

