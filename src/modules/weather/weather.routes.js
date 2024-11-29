import express from 'express'
import { getPastWeather } from './weather.controller.js';

const weatherRoute = express.Router()


weatherRoute.get('/weather/past/:city', getPastWeather)


export default weatherRoute;