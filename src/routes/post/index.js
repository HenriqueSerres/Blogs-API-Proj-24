const express = require('express');
const postController = require('../../database/controllers/postController');
const validateToken = require('../../database/middlewares/tokenIsValid');
const validatePost = require('../../database/middlewares/postValidate');
const validatePostEdit = require('../../database/middlewares/updatePostValidate');

const postRouter = express.Router();

postRouter.post('/', validateToken, validatePost, postController.addPost);
postRouter.get('/', validateToken, postController.getAllPosts);
postRouter.get('/:id', validateToken, postController.getPostById);
postRouter.put('/:id', validateToken, validatePostEdit, postController.postUpDate);
postRouter.delete('/:id', validateToken, postController.deletePost);

module.exports = postRouter;