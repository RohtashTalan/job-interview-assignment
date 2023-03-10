import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({extended:true}));


// //  Import Routes
import user from './routes/user.routes.js';
import product from './routes/product.routes.js';


// // Routes middleware
app.use('/api/v1/users', user)
app.use('/api/v1/products', product)



export default app;