import mongoose from 'mongoose';

const WeatherSchema = new mongoose.Schema({
    coord: {
        lon: { type: Number },
        lat: { type: Number },
    },
    weather: [
        {
            id: { type: Number },
            main: { type: String },
            description: { type: String },
            icon: { type: String },
        },
    ],
    base: { type: String },
    main: {
        temp: { type: Number },
        feels_like: { type: Number },
        temp_min: { type: Number },
        temp_max: { type: Number },
        pressure: { type: Number },
        humidity: { type: Number },
        simulated: {
            feels_like: { type: String },
            pressure: { type: String },
            humidity: { type: String },
            wind: {
                speed: { type: String },
                direction: { type: String },
            },
        },
    },
    visibility: { type: Number },
    wind: {
        speed: { type: Number },
        deg: { type: Number },
        gust: { type: Number },
    },
    clouds: {
        all: { type: Number },
    },
    dt: { type: Number },
    sys: {
        type: { type: Number },
        id: { type: Number },
        country: { type: String },
        sunrise: { type: Number },
        sunset: { type: Number },
    },
    timezone: { type: Number },
    id: { type: Number },
    name: { type: String },
    cod: { type: Number },
}, {
    timestamps: true
});

WeatherSchema.index({ name: 1, createdAt: 1 });

const WeatherModel = mongoose.model('Weather', WeatherSchema);

const createIndexes = async () => {
    try {
        await WeatherModel.createIndexes();
    } catch (error) {
        console.error('Error creating indexes:', error);
    }
};

createIndexes();

export default WeatherModel;
