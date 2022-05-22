const express = require('express');
const cors = require('cors');
const artistRouter = require('./routes/artist');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/artist', artistRouter);

module.exports = app;
