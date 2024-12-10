const express = require('express');
const { getDataset } = require('../controllers/datasetController');
const { authenticate } = require('../middlewares/authMiddleware');
const  upload  = require('../middlewares/multerMiddleware');
const router = express.Router();

router.get('/',upload.none() , getDataset);

module.exports = router;
