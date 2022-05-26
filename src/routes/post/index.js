const express = require('express');
const postController = require('../../database/controllers/postController');
const validateToken = require('../../database/middlewares/tokenIsValid');
const validatePost = require('../../database/middlewares/postValidate');

const postRouter = express.Router();

postRouter.post('/', validateToken, validatePost, postController.addPost);
postRouter.get('/', validateToken, postController.getAllPosts);

module.exports = postRouter;