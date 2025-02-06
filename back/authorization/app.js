const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use(express.static(path.join(__dirname, '../../src/App.js')));

module.exports = app;