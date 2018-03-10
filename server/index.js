const express = require('express');
const db = require('../db/index');
const app = express();
app.listen(3000);
app.use(express.static(__dirname + '/../dist/'))
db()