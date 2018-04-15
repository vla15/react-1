import express from 'express'
import dbConnect from '../db/index'
import bodyParser from 'body-parser'
import restApiRouter from './api/router/restRouter'
import multer from 'multer'
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import history from 'connect-history-api-fallback';
import config from '../config/index.js';

const app = express();
const upload = multer({dest: 'upload/'});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', upload.single('image'), restApiRouter);
app.use(history());
app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(config.port);
dbConnect();