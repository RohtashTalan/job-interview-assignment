import express from "express";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({extended:true}));


// //  Import Routes
import user from './routes/user.routes.js';
import product from './routes/product.routes.js';
import cart from './routes/cart.routes.js';


// // Routes middleware
app.use('/api/v1/user', user)
app.use('/api/v1/product', product)
app.use('/api/v1/cart', cart)



export default app;