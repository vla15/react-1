import express from 'express'
import dbConnect from '../db/index'
import bodyParser from 'body-parser'
import restApiRouter from './api/router/restRouter'
import multer from 'multer'
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import history from 'connect-history-api-fallback';

const app = express();
const upload = multer({dest: 'upload/'});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', restApiRouter);
app.use(history());
app.use(webpackMiddleware(webpack(webpackConfig)));
app.listen(3000);
dbConnect();