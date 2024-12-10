const app = require('./app'); // Import your express app
require('dotenv').config();

// Vercel does not need `app.listen()`
// Export the app instance for Vercel to use
module.exports = app;
