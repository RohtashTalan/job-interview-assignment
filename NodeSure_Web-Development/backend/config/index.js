import dotenv from 'dotenv';
dotenv.config();



const config = {
    JWT_TOKEN:process.env.JWT_TOKEN,
    JWT_EXPIRY:process.env.JWT_EXPIRY,

    MONGO_URL:process.env.MONGO_URL,
    PORT:process.env.PORT
}

export default config;