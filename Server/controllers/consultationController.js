const Consultation = require('../models/Consultation');

const createConsultation = async (req, res) => {
  try {
    const data = await Consultation.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Consultation request submitted',
      data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createConsultation
};