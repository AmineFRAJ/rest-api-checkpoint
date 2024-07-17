//require exxpress
const express = require("express");

//initialize express app
const app = express();

//use body-parser middleware to parse JSON request bodies
app.use(express.json());

//crete port
require("dotenv").config({path:"./config/.env"});
const PORT = process.env.PORT || 5003;

//Create route server 
app.listen(PORT, (error) => {
  error
    ? console.log("error")
    : console.log(`the server is running at http://127.0.0.1:${PORT}`);
});
//connect to DB
const connect = require("./config/connectDB");
connect();

//require routes
app.use('/api/user', require('./routes/userRoutes'));