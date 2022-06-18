import express from "express";
import {} from "dotenv/config";

const app = express();

app.use(express.json());


app.get('/api', (req, res) => {
    res.status(200).send("API REST");
});

app.get('/api/update/wallet', (req, res) => {
    res.send('Update Wallet Price');
    res.status(200);
});

app.get('/api/update/list', (req, res) => {
    res.send('Update Coins List');
    res.status(200);
});

app.post("/api/create", (req, res) => {
    res.send("Create global report");
    res.status(200);
});


app.listen(process.env.PORT);