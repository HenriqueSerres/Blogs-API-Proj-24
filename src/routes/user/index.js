const express = require('express');
const userController = require('../../database/controllers/userController');
const validateUser = require('../../database/middlewares/userIsValid');
const validateToken = require('../../database/middlewares/tokenIsValid');

const userRouter = express.Router();

userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.post('/', validateUser, userController.createUser);

module.exports = userRouter;