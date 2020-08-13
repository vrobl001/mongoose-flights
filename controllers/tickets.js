const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('tickets/new', { title: 'Buy Ticket', flight });
  });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  req.body.flight = req.params.id;
  Ticket.create(req.body, function(err, ticket) {
    res.redirect(`/flights/${req.params.id}`);
  });
}
