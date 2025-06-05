const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { authMiddleware } = require('../middleware/auth');

// All booking routes require authentication
router.use(authMiddleware);

router.post('/', bookingController.createBooking);
router.get('/user', bookingController.getUserBookings);
router.put('/:id/confirm', bookingController.confirmBooking);

module.exports = router;
