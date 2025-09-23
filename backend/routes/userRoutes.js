const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, roleMiddleware } = require('../middleware/auth');
router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/employees', authMiddleware, roleMiddleware('admin'), userController.getEmployees);
router.get('/:id', authMiddleware, userController.getUserById);


module.exports = router;

// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');
// const { authMiddleware, roleMiddleware } = require('../middleware/auth');

// // Routes
// router.post('/login', async (req, res) => {
//   console.log("📩 Incoming login request:", req.body);
//   try {
//     const { email, password } = req.body;
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ msg: "Server error" });
//   }
// });

// router.post('/register', userController.register);
// router.get('/employees', authMiddleware, roleMiddleware('admin'), userController.getEmployees);

// module.exports = router;


