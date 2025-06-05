const Booking = require('../models/Booking');
const Service = require('../models/Service');
const Inventory = require('../models/Inventory');
const Payment = require('../models/Payment');
const Sale = require('../models/Sale');

exports.createBooking = async (req, res) => {
  const { serviceId } = req.body;
  try {
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    const booking = new Booking({
      userId: req.user.id,
      serviceId,
      status: 'pending',
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate('serviceId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.confirmBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('serviceId');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    if (booking.userId.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });
    if (booking.status !== 'pending') return res.status(400).json({ message: 'Booking cannot be confirmed' });

    // Check and update inventory
    for (const item of booking.serviceId.inventoryItems) {
      const inventory = await Inventory.findById(item.itemId);
      if (!inventory || inventory.quantity < item.quantity) {
        return res.status(400).json({ message: `Insufficient inventory for ${item.itemId}` });
      }
      inventory.quantity -= item.quantity;
      await inventory.save();
    }

    // Update booking status
    booking.status = 'confirmed';
    await booking.save();

    // Record payment (simplified, no real gateway here)
    const payment = new Payment({
      userId: req.user.id,
      bookingId: booking._id,
      amount: booking.serviceId.price,
      status: 'completed',
    });
    await payment.save();

    // Record sale
    const sale = new Sale({
      userId: req.user.id,
      items: booking.serviceId.inventoryItems,
      total: booking.serviceId.price,
    });
    await sale.save();

    res.json({ message: 'Booking confirmed', booking, payment, sale });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};