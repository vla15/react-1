import express from 'express'
import db from '../db/index'
import bodyParser from 'body-parser'
import restApiRouter from './api/router/restRouter'
import multer from 'multer'
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';

const app = express();
const upload = multer({dest: 'upload/'});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(3000);
// app.use(express.static(__dirname + '/../dist/'))
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