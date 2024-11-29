
import express from 'express'
import dateBase from './datebase/dbConnection.js'
import cors from 'cors'
import dotenv from "dotenv";
import weatherRoute from './src/modules/weather/weather.routes.js';
import http from 'http'
import { Server } from 'socket.io';
import weatherSocket from './src/socket.io/weatherSocket.js';
dotenv.config();

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});
app.use(express.json())
app.use(cors())
app.use(weatherRoute)
dateBase

weatherSocket(io)
const PORT = process.env.PORT || 3001

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))