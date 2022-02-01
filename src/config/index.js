import { } from 'dotenv/config'

export default {
    port: process.env.PORT,
    airtable: {
        secretKey: process.env.AIRTABLE_SECRET_KEY,
        secretBase: process.env.AIRTABLE_SECRET_BASE,
    },
}