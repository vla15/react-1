import * as _ from 'lodash';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = process.env.NODE_ENV;

const baseConfig = {
  port: 3000,
  db: {
    url: 'mongodb://localhost/react_project'
  }
};

let envConfig = {};


switch(env) {
  case 'development':
    envConfig = require('./dev.js').config
    break;
  case 'production':
    envConfig = require('./prod.js').config
    break;
  case 'test':
    envConfig = require('./test.js').config
    break;
  default:
    envConfig = require('./dev.js').config
    break;
}

export default _.merge(baseConfig, envConfig);
