import express from "express"
import {} from "dotenv/config"
import { authorization } from './middlewares/auth.js'
import * as response from './helpers/responses.js'

const app = express();

// app.use(express.json());

app.get('/api', (req, res) => {
    if (auth.authorization(req)) {
        // TODO : func code or func call
        response.successResponse(res, "Auth success")
    }
});

app.get("/test", (req, res) => {
    response.successResponse(res, 'Succes msg');
});

app.get('/api/update/wallet', (req, res) => {
    res.send('Update Wallet Price');
    res.status(200);
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