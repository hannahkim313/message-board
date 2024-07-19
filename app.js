const express = require('express');
const path = require('path');

const app = express();

// Define routes
const indexRouter = require('./routes/index');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Apply app-level middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', indexRouter);

const PORT = 3001;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));

module.exports = app;
