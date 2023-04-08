
const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

const path = require("path");
const dotenv = require("dotenv");


// using config for environment variable
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

//route imports
app.use(express.json());


const event = require("./Routes/eventRoute");

app.use("/api/v2", event);



//middleware for error
app.use(errorMiddleware);

module.exports = app;
