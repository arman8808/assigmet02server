// const app = require('./app');
// require('dotenv').config();
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const { createServer } = require('http');
const app = require('./app');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Vercel serverless function handler
module.exports = (req, res) => {
  const server = createServer(app);
  server.emit('request', req, res);  // Pass the request and response to Express
};
