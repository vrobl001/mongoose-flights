const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
      default: 'AUS'
    },
    arrival: {
      type: Date,
      default: function() {
        let today = new Date();
        return new Date().setFullYear(today.getFullYear() + 1);
      }
    }
  },
  { timestamps: true }
);

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United'],
      default: 'American'
    },
    flightNo: {
      type: Number
    },
    departs: {
      type: Date,
      default: function() {
        let today = new Date();
        return new Date().setFullYear(today.getFullYear() + 1);
      }
    },
    airport: {
      type: String,
      enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
      default: 'AUS'
    },
    destinations: [destinationSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Flight', flightSchema);
