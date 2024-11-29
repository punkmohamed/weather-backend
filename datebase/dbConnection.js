import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbURI = process.env.MONGODB_URI;

const dateBase = mongoose.connect(dbURI)
    .then(() => console.log("database working"))
    .catch((error) => console.log(error))
export default dateBase;