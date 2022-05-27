const express = require('express');
const userController = require('../../database/controllers/userController');
const validateUser = require('../../database/middlewares/userIsValid');
const validateToken = require('../../database/middlewares/tokenIsValid');

const userRouter = express.Router();

userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.post('/', validateUser, userController.createUser);
userRouter.delete('/me', validateToken, userController.deleteUserById);
userRouter.get('/:id', validateToken, userController.getUserById);

module.exports = userRouter;