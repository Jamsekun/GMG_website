const Inventory = require('../models/Inventory');

exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.restockInventory = async (req, res) => {
  const { quantity } = req.body;
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) return res.status(404).json({ message: 'Inventory item not found' });

    inventory.quantity += quantity;
    await inventory.save();
    res.json({ message: 'Inventory restocked', inventory });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};