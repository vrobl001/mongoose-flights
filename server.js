// Require modules
var express = require('express');
var path = require('path');
var logger = require('morgan');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

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
app.use(methodOverride('_method'));

// Mount routes app.use()
app.use('/', require('./routes/index'));
app.use('/flights', require('./routes/flights'));
app.use('/flights', require('./routes/destinations'));
app.use('/flights', require('./routes/tickets'));

// Tell app to listen
app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
