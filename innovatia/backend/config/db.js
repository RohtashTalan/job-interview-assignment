import mongoose from "mongoose";
import config from "./index.js";


const connectDB = () => {
    mongoose.connect(config.MONGO_URL).then(console.log('DB connected Successfully')).catch((error)=>{
        console.log(`Db  Connection Failed ${error.message}`);
    })
}


export default connectDB;