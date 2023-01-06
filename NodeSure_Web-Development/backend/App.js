import express, { json }  from "express";

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


//  Import Routes
import user from './routes/user.routes';
import product from './routes/product.routes';


// Routes middleware
app.use('/api/v1/users', user)
app.use('/api/v1/products', product)



export default app;