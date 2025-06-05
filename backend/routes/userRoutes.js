const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');
router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/employees', authMiddleware, roleMiddleware('admin'), userController.getEmployees);

module.exports = router;