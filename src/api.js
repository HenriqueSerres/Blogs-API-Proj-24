const express = require('express');
const router = require('./routes');
const middlewares = require('./database/middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(router);
app.use(middlewares.errorMiddleware);

module.exports = app;
