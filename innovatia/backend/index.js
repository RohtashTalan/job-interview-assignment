import app from "./App.js";
import config from './config/index.js';
import connectDB  from "./config/db.js";



// invoke db
connectDB();




// Start server
app.listen(config.PORT, ()=>{
    console.log(`Server running on ${config.PORT}`);
})