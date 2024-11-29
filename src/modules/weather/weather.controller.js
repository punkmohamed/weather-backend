
import dotenv from "dotenv";
import WeatherModel from "../../../datebase/models/Weather.js";
dotenv.config();

export const api = process.env.OPEN_WEATHER_API


const getPastWeather = async (req, res) => {
    try {
        const { city } = req.params
        const weather = await WeatherModel.find({
            name: { $regex: new RegExp(city, "i") },
        });

        res.status(201).json({ message: "Current weather data", weather })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}



export {
    getPastWeather,

}