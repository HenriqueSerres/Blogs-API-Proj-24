const express = require('express');
const categoryController = require('../../database/controllers/categoryController');
const validateToken = require('../../database/middlewares/tokenIsValid');
const validateCategory = require('../../database/middlewares/categoryNameValidate');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, validateCategory, categoryController.addCategory);
categoryRouter.get('/', validateToken, categoryController.getAllCategories);

module.exports = categoryRouter;