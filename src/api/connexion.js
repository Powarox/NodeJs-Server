import Airtable from "airtable"

const airtableBase = new Airtable({
    apiKey: process.env.AIRTABLE_SECRET_KEY
}).base(process.env.AIRTABLE_SECRET_BASE)

export default airtableBase

