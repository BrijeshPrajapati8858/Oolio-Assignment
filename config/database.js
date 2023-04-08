const mongoose = require("mongoose");

//database connection

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`database is connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDB;
