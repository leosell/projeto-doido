import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

import { routes } from "./routes/routes.js"

const server = express()

dotenv.config({ path: './dataBase/config.env' })
const port = process.env.PORT || 5000

server.listen(
    port,
    console.log(`Servidor aberto. \nPorta do servidor é ${port}`)
)

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(routes)
