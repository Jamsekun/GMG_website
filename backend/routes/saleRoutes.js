const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

router.get('/total', authMiddleware, roleMiddleware('admin'), saleController.getTotalSales);

module.exports = router;