const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    servedDishes: [String],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
