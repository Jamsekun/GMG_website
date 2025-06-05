const Payment = require('../models/Payment');

exports.getUserPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user.id });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};