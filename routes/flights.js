var express = require('express');
var router = express.Router();
var flightsCtlr = require('../controllers/flights');

router.get('/', flightsCtlr.index);
router.post('/', flightsCtlr.create);
router.get('/new', flightsCtlr.new);
router.get('/:id', flightsCtlr.show);

// Delete
router.delete('/:id', flightsCtlr.delete);

module.exports = router;
