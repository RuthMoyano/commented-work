const express = require("express");
const logger = require("morgan");

//bringing express and morgan 
const app = express();
//calling express

const userRouter = require("./routes/user/userRouter"); //path to user server and database 

app.use(logger("dev")); 
//middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

app.use(express.json());
//parsing json data/incoming data
app.use(express.urlencoded({ extended: false }));
//parsing form data 
app.use("/api/user", userRouter);

module.exports = app;
// exporting app 
