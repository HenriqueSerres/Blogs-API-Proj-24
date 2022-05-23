const express = require('express');
const loginController = require('../../database/controllers/loginController');
// const validateToken = require('../../database/middlewares/tokenIsValid');

const loginRouter = express.Router();

loginRouter.post('/', loginController.loginUser);

module.exports = loginRouter;