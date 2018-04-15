import merge from 'lodash';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = process.env.NODE_ENV;

const baseConfig = {
  secret: "letdoit",
  port: 3000,
  db: {
    url: 'mongodb://localhost/react_project'
  }
};

