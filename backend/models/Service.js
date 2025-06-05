const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  inventoryItems: [{ itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory' }, quantity: Number }],
  duration: { type: Number, required: true }, // in minutes
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);