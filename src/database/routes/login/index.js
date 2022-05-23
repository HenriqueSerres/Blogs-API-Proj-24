const express = require('express');
const loginController = require('../../controllers/loginController');
const validateToken = require('../../middlewares/tokenIsValid');

const loginRouter = express.Router();

loginRouter.post('/', validateToken, loginController.loginUser);

module.exports = loginRouter;