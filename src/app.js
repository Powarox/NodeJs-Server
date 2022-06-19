import express from "express"
import {} from "dotenv/config"
import * as response from './helpers/responses.js'
import * as control from './controllers/control.js'
import { authorization } from './middlewares/auth.js'

const app = express();

// app.use(express.json());

app.get('/api', (req, res) => {
    if (authorization(req)) {
        response.successResponse(res, "Auth success")
    }
});

app.get('/api/update/wallet', (req, res) => {
    if (authorization(req)) {
        control.updateWalletPriceAirtable()
        response.successResponse(res, "Auth success")
    }
});

app.get("/api/update/list", (req, res) => {
    if (authorization(req)) {
        control.updateCoinsListPriceAirtable()
        response.successResponse(res, "Auth success")
    }
});

app.post("/api/create/record/history", (req, res) => {
    if (authorization(req)) {
        control.createReccordAirtable()
        response.successResponse(res, "Auth success")
    }
});

app.get('/api/update/list', (req, res) => {
   res.status(200).json({
       message: "Welcome to the project-name api",
   });
});

app.post("/api/create", (req, res) => {
    res.send("Create global report");
    res.status(200);
});

// throw 404 if URL not found
app.all("*", (req, res) => {
    response.notFoundResponse(res, "Page not found");
});

app.listen(process.env.PORT);