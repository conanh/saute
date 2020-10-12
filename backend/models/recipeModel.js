const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  title: { type: String, required: true },
  images: { type: [String] },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  createdOn: { type: Date, required: true },
  createdBy: { type: Number, required: true },
  rating: { type: Number },
  source: { type: String }
});

module.exports = Recipe = mongoose.model("recipe", recipeSchema);