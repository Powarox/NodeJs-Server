const http = require("http")
import { fetchPrice } from './index.js'

const server = http.createServer((req, res) => {
    
    let data = new fetchPrice()
    console.log(data)

    res.end('coucou')
})

server.listen(4000) // process.env.PORT ||
