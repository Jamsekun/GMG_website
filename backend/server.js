// i need to get type checker here
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require("body-parser");
const Service = require('./models/Service');
const morgan = require('morgan');


require('dotenv').config();



const { authMiddleware, roleMiddleware } = require("./middleware/auth");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(helmet());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'));

// Initial services data
const initialServices = [
  {
    name: "Coffee Tasting",
    description: "Experience our premium coffee selection with expert guidance",
    price: 25,
    duration: 60,
    inventoryItems: []
  },
  {
    name: "Car Wash",
    description: "Professional car washing service with premium products",
    price: 35,
    duration: 45,
    inventoryItems: []
  },
  {
    name: "Interior Detailing",
    description: "Complete interior cleaning and detailing service",
    price: 75,
    duration: 120,
    inventoryItems: []
  },
  {
    name: "Express Wash",
    description: "Quick exterior wash and vacuum service",
    price: 20,
    duration: 30,
    inventoryItems: []
  }
];

// Initialize services function
const initializeServices = async () => {
  try {
    const count = await Service.countDocuments();
    if (count === 0) {
      await Service.insertMany(initialServices);
      console.log('Services initialized successfully');
    } else {
      console.log('Services already exist, skipping initialization');
    }
  } catch (error) {
    console.error('Error initializing services:', error);
  }
};

// Connect to MongoDB and initialize services
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB');
    await initializeServices();
  })
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
// app.use('/api/users', require('./routes/userRoutes'));
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Backend is running 🚀',
    timestamp: new Date().toISOString()
  });
});
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/inventory', require('./routes/inventoryRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));
app.use('/api/sales', require('./routes/saleRoutes'));

//AUTHENTICATION new
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get("/profile", authMiddleware, (req, res) => {
  res.json({ msg: "Profile data", user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));