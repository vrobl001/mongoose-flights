const router = require('express').Router();
const ticketsCtlr = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketsCtlr.new);
router.post('/flights/:id/tickets', ticketsCtlr.create);

module.exports = router;
