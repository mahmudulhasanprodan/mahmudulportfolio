// External imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Internal Imports
const {notFoundHandler,errorHandler} = require("./ErrorHandler/errorHandler")


const app = express();
dotenv.config();

// Database Connection 
mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log("Database Successfully Connected"))
.catch((err) => console.log(err))

// Request Parser
app.use(express.json());
app.use(express.urlencoded({extended : true}))


// Route handler
app.get("/",(req,res) => {
     res.send("Hello Programmers!")
})


// not found handler
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

app.listen(process.env.PORT,() => {
     console.log(`Listening to port ${process.env.PORT}`)
});