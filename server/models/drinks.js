const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  name: { type: String, required: true},
  ingredients: {type: [String], required: true},
  glass: {type: String, required: true},
  garnish: [String],
  procedure: [String],
  image: String
});

const drinkCollection = mongoose.model('Drink', drinkSchema);

module.exports = drinkCollection;
