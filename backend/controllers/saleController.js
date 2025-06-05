const Sale = require('../models/Sale');

exports.getTotalSales = async (req, res) => {
  try {
    const totalSales = await Sale.aggregate([
      { $group: { _id: null, total: { $sum: '$total' } } },
    ]);
    res.json(totalSales[0] || { total: 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};