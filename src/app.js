import express from "express"
import {} from "dotenv/config"
import * as response from './helpers/responses.js'
import * as control from './controllers/control.js'
import { authorization } from './middlewares/auth.js'

const app = express();

// app.use(express.json());

app.get('/api', (req, res) => {
    if (authorization(req, res)) {
        response.successResponse(res, "Auth success")
    }
});

app.get('/api/update/all', (req, res) => {
    if (authorization(req, res)) {
        control.updateWalletPriceAirtable()
        control.updateCoinsListPriceAirtable()
        response.successResponse(res, "All update")
    }
});

app.get('/api/update/wallet', (req, res) => {
    if (authorization(req, res)) {
        control.updateWalletPriceAirtable()
        response.successResponse(res, "Wallet update")
    }
});

app.get("/api/update/list", (req, res) => {
    if (authorization(req, res)) {
        control.updateCoinsListPriceAirtable()
        response.successResponse(res, "Coins list update")
    }
});

app.get("/api/create/record/history", (req, res) => {
    if (authorization(req, res)) {
        control.createReccordAirtable()
        response.successResponse(res, "History record create")
    }
});

app.all("*", (req, res) => {
    response.notFoundResponse(res, "Page not found");
});

app.listen(process.env.PORT);