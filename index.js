//DEPENDENCIES
//terminal commands:
    //npm init -y
    //npm install express
    //npm install mongoose
    //npm i express express-react-views react react-dom
    //npm i method-override
const express = require('express');
const mongoose = require('./db/connection.js');
const method = require('method-override');
const Port = process.env.PORT || 3000;

const app = express();

//MIDDLEWARE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}));
app.use(method('_method'));
app.use(express.static('public'));

//LINKING TO DATA FILE
const Recipe = require('./models/Recipes.js');

//LINKING TO CONTROLLERS FILE (contains routes)
const recipesController = require('./controllers/recipes.js');

app.get('/recipebox', (req, res) => {
    Recipe.find({})
      .sort({ createdAt: -1 })
      .limit(12)
      .then(recipes => {
        res.render('Index', { recipes });
      });
  });

app.use('/recipebox', recipesController);

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

app.listen(Port, () => console.log('server is running'));