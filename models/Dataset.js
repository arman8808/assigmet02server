const mongoose = require("mongoose");

const datasetSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  ageGroup: {
    type: String,
    enum: ["15-25", ">25"],
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  features: {
    type: Map,
    of: Number,
    required: true,
  },
});

module.exports = mongoose.model("Dataset", datasetSchema);
