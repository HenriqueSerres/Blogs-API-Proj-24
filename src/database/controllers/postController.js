const postService = require('../services/postService');

const addPost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user.data;
    const newPost = await postService.addPost({ id, title, content, categoryIds });
    if (newPost) {
      return res.status(201).json(newPost);
    }    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  addPost,
};