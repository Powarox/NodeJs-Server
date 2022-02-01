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
                'Amounts': response[res].fields['Amounts'],
                'Coins': response[res].fields['Coins'],
                'MarketPrice': response[res].fields['Market Price'],
                'MarketValue': response[res].fields['Market Value'],
                'ProfitsUsd': response[res].fields['Profits $'],
                'ProfitsPer': response[res].fields['Profits %'],
                'App': response[res].fields['App'],
                'PriceName': response[res].fields['Price Name'],
                'BuyPrice': response[res].fields['Buy Price']
            }
        }
        console.log(data);
    },
    function done(err) {
        if (err) { console.error(err); return; }
    });
}

// Create TransactionBuy and update Wallet
export function createTransactionBuy(info) {
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

