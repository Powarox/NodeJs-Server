import Airtable from "airtable"

// const airtableDevBase = new Airtable({
//     apiKey: process.env.AIRTABLE_SECRET_KEY
// }).base(process.env.AIRTABLE_DEV_SECRET_BASE)

// const airtableRealBase = new Airtable({
//     apiKey: process.env.AIRTABLE_SECRET_KEY
// }).base(process.env.AIRTABLE_REAL_SECRET_BASE)

const airtableBase = new Airtable({
    apiKey: process.env.AIRTABLE_SECRET_KEY
}).base(process.env.AIRTABLE_DEV_SECRET_BASE)

export {
    airtableBase
} 
