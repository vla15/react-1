const mongoose = require('mongoose');

module.exports = db = () => {
  mongoose.connect('mongodb://localhost/react_project')
};