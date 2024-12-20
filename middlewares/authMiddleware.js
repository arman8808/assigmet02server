const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT;

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  console.log(token);
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
