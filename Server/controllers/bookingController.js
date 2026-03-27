const Booking = require('../models/Booking');


const createBooking = async (req, res) => {
  try {
    const data = await Booking.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Booking request submitted',
      data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBooking
};