const express = require('express');
const db = require('../db/index');
const app = express();
const bodyParser = require('body-parser');
const restApiRouter = require('./api/router/restRouter')
app.listen(3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../dist/'))
db()

app.use('/api', restApiRouter);

let dogs = [
  { name: "berrdash", breed: "corgi" },
  { name: "dash", breed: "chowchow" },
  { name: "beer", breed: "mut" },
  { name: "champagne", breed: "akita" },
  { name: "dogo", breed: "terrier" },
  { name: "doge", breed: "lab" },
  { name: "mucham", breed: "mut" }
];

app.use('/getDogs', (req, res) => {
  res.send(dogs);
})
app.use('/adoptDog', (req, res) => {
  let dog = req.body;
  dogs = dogs.filter(d => d.name !== dog.name);
  res.send(dogs);
})