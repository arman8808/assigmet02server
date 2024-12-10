const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async () => {
  console.log("checking data base",`${process.env.dateBaseUrl}filterdataset`);
  
  try {
    await mongoose.connect(`${process.env.dateBaseUrl}filterdataset`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
