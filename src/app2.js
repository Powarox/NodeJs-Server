import express from "express";
import {} from "dotenv/config";
import * as response from './helpers/responses.js';

const app = express();

app.use(express.json());


app.get('/api', (req, res) => {
    if (req.headers.authorization === process.env.REST_API_KEY) {
        // TODO : func code or func call

        return res.status(200).json({message: 'Auth Success'});
    }
    
    res.status(403).json({
        message: "Auth Failed",
    });
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
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

app.listen(process.env.PORT);