const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async () => {
  console.log(process.env.dateBaseUrl,"process.env.dateBaseUrl","checking data base url");
  
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
