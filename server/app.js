const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares');

const app = express();

// app.use(router);
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', router);

app.use(notFound);
app.use(errorHandler);

module.exports = app;