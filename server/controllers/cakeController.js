const Cake = require('../models/Cake');

// Create
exports.createCake = async (req, res) => {
  try {
    const cake = new Cake(req.body);
    const saved = await cake.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
exports.getAllCakes = async (req, res) => {
  try {
    const cakes = await Cake.find();
    res.json(cakes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read One
exports.getCakeById = async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id);
    if (!cake) return res.status(404).json({ error: 'Cake not found' });
    res.json(cake);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateCake = async (req, res) => {
  try {
    const updated = await Cake.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: 'Cake not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteCake = async (req, res) => {
  try {
    const deleted = await Cake.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Cake not found' });
    res.json({ message: 'Cake deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
