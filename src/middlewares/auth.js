import {} from "dotenv/config"
import * as response from "../helpers/responses.js"

export function authorization(req) {
    if (req.headers.authorization === process.env.REST_API_KEY) {
        return true;
    }
    return response.unauthorizedResponse(res, "Access denied");
}
