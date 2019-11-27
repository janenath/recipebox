const mongoose = require('../db/connection');

const RecipeSchema = new mongoose.Schema({
    Title: String,
    Photo: String,
    Source: String,
    Category: String,
    Ingredients: String,
    Directions: String,
})

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;

