const router = require('express').Router();
const ticketsCtlr = require('../controllers/tickets');

router.get('/:id/tickets/new', ticketsCtlr.new);
router.post('/:id/tickets', ticketsCtlr.create);

module.exports = router;
