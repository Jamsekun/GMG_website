const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');

router.get('/', serviceController.getAllServices);
router.post('/', authMiddleware, roleMiddleware('admin'), serviceController.createService);

module.exports = router;