const express = require('express');
const path = require('path');

// Initialize app
const app = express();

// Import Route Files
const form = require('./routes/form');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Routes
app.use('/' , form);

// Start Server
app.listen(4000, () => {
  console.log('Server started on port: 4000');
});