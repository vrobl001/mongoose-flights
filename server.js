// Require modules
var express = require('express');
var path = require('path');
var logger = require('morgan');
const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
const destinationsRouter = require('./routes/destinations');
const ticketsRouter = require('./routes/tickets');

// set up express app
const app = express();

require('dotenv').config();
require('./config/database');

// configure express app app.set()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Mount middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes app.use()
app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', destinationsRouter);
app.use('/', ticketsRouter);

// Tell app to listen
app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
