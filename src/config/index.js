import { } from 'dotenv/config'

export default {
    port: process.env.PORT,
    api: {
        restApiKey: process.env.REST_API_KEY,
    },
    airtable: {
        secretKey: process.env.AIRTABLE_SECRET_KEY,
        secretDevBase: process.env.AIRTABLE_DEV_SECRET_BASE,
        secretRealBase: process.env.AIRTABLE_REAL_SECRET_BASE,
        secretTestBase: process.env.AIRTABLE_TEST_SECRET_BASE,
    },
};
