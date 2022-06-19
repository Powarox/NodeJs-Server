import {} from "dotenv/config"
import * as response from "../helpers/responses.js"

export function authorization(req, res) {
    if (req.headers.authorization === process.env.REST_API_KEY) {
        return true
    }
    response.unauthorizedResponse(res, "Access denied")
    return false
}
