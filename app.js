// const express = require('express');
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const datasetRoutes = require('./routes/datasetRoutes');
// const cors =require("cors")
// const app = express();
// app.use(express.json());


// app.use(cors());

  
// app.use('/api/auth', authRoutes);
// app.use('/api/dataset', datasetRoutes);
// app.get('/',async(req,res)=>{
//     return res.status(200).json({message:"Server is live"})
// })
// connectDB();
// module.exports = app;


const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const datasetRoutes = require('./routes/datasetRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Debugging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dataset', datasetRoutes);

// Default route for health check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is live' });
});

module.exports = app;

