const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

router.get('/', authMiddleware, inventoryController.getInventory);
router.put('/:id/restock', authMiddleware, roleMiddleware('employee'), inventoryController.restockInventory);

module.exports = router;