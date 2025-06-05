const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/users', require('./routes/userRoutes'));
app.use('/services', require('./routes/serviceRoutes'));
app.use('/bookings', require('./routes/bookingRoutes'));
app.use('/inventory', require('./routes/inventoryRoutes'));
app.use('/payments', require('./routes/paymentRoutes'));
app.use('/sales', require('./routes/saleRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));