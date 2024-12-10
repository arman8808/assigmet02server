const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  console.log("Checking database URL:", process.env.dateBaseUrl);

  try {
    await mongoose.connect(`${process.env.dateBaseUrl}filterdataset`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Database connection error:", error.message);
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// const mongoose = require("mongoose");
// require("dotenv").config();
// // Ensure that the environment variable for MongoDB URI is set correctly
// console.log("DB: ->", process.env.dateBaseUrl);

// mongoose.set("strictQuery", true);

// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.dateBaseUrl}filterdataset`, {
//       serverSelectionTimeoutMS: 5000, // Shorten the time to try connecting
//       socketTimeoutMS: 45000, // Close sockets after 45 seconds
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("mongoose is connected");

//     mongoose.connection.on("error", (err) => {
//       console.log("MongoDB connection error:", err);
//     });

//     mongoose.connection.on("connected", () => {
//       console.log(" connected successfully");
//     });
//   } catch (err) {
//     console.log("Error connecting to MongoDB:", err);
//     process.exit(1); // Exit if connection fails
//   }
// };

// module.exports = connectDB;
