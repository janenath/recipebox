const Recipe = require('../models/Recipes');
const data = require('./seeds.json');
const mongoose = require('./connection.js');

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

Recipe.deleteMany({})
    .then(() => {
        return Recipe.collection.insertMany(data);
    })
    .then(() => {
        process.exit();
    });

//TERMINAL COMMAND: "npm run seed" when ready to seed data