const Dataset = require('../models/Dataset');

exports.getDataset = async (req, res) => {
  try {
    const { age,ageGroup, gender, startDate, endDate } = req.query;
    console.log(age,ageGroup, "ageGroup", gender, "gender", startDate, "startDate", endDate, "endDate");
    console.log(req.query,'req.query');
    

    const query = {};
  if (age && age !== 'all') query.ageGroup = age;
    if (gender && gender !== 'all') query.gender = gender;
    if (startDate || endDate) {
      query.date = {};
      if (startDate) query.date.$gte = startDate; // Compare string for greater than or equal
      if (endDate) query.date.$lte = endDate; // Compare string for less than or equal
    }
    

    console.log(query, "MongoDB query");
    const data = await Dataset.find(query);
    console.log(data.length);
    
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No data found for the provided filters" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
