const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  Chief_Complaint: {
    type: String,
    required: true
  },
  previous_history: {
    type: String
  },
  any_allergies: {
    type: String
  },
  date: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Bookings', bookingSchema);