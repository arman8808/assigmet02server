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
    // Provide more details about the error for debugging
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
