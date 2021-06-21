require("dotenv").config(); //.env file

const mongoose = require("mongoose");
//bringing in mongoose

const app = require("./app");
//bringing app from the project and single period means it's on the same level of file structure

const port = 3000;
//set port to 300

mongoose
  .connect(process.env.MONGO_DB, {  //connecting to mongoDB + getting the path from .env file
    useNewUrlParser: true,     
    useUnifiedTopology: true, //both are optional flags otherwise it will throw errors in terminal
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server connected on ${port}`);
      console.log("MongoDB Connected");
    });   //these lines connect to the server or turns on the server. It is in "then" block because we want to make sure database is connected.
  })
  .catch((e) => {
    console.log(e);
  });
