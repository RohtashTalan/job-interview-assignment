import app from "./App";
import config from './config';
import connectDB  from "./config/db";



// invoke db
connectDB();




// Start server
app.listen(config.PORT, ()=>{
    console.log(`Server running on ${config.PORT}`);
})