const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  delete: deleteFlight,
};

function deleteFlight(req, res) {
  flightToBeDeleted = Flight.findById(req.params.id);
  Flight.deleteOne(flightToBeDeleted, function (err, flight) {
    if (err) throw err;
    res.redirect('/flights');
  });
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  }).sort('departs');
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  Flight.create(req.body, function (err, flight) {
    res.redirect('/flights');
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render('flights/show', { title: 'Flight Detail', flight, tickets });
    });
  });
}
