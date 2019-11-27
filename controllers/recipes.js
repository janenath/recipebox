const express = require('express');
const router = express.Router();

//LINK DATA
const Recipe = require('../models/Recipes.js');

//INDEX ROUTE
router.get('/', (req, res) => {
    Recipe.find({}).then(recipes => {
        res.render('Index', { recipes });
    });
});

//NEW ROUTE
router.get('/new', (req, res) => {
    res.render('New');
});

//CREATE ROUTE
router.post('/', (req, res) => {
    console.log(req.body);
    Recipe.create(req.body).then(() => {
        res.redirect('/recipebox');
    });
});

//SHOW ROUTE
router.get('/:id', (req, res) => {
    Recipe.findOne({ _id: req.params.id }).then(recipe => {
        res.render('Show', recipe)
    });
});

//EDIT ROUTE
router.get('/edit/:id', (req, res) => {
    Recipe.findOne({ _id: req.params.id }).then(recipe => {
        res.render('Edit', recipe);
    });
});

//UPDATE ROUTE
router.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(recipe => {
        res.redirect(`/recipebox/${recipe.id}`);
    });
});

//DESTROY ROUTE
router.delete('/:id', (req, res) => {
    Recipe.findOneAndRemove({ _id: req.params.id }).then(() => {
        res.redirect('/recipebox');
    });
});

module.exports = router;
