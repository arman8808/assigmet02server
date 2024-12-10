const express = require('express');
const { signup, login } = require('../controllers/authController'); 
const  upload  = require('../middlewares/multerMiddleware');
const router = express.Router();

router.post('/signup',upload.none(), signup); 
router.post('/login',upload.none(), login);  

module.exports = router;
