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

const getAllPosts = async (req, res, next) => {
  try {
    const allPosts = await postService.getAllPosts();
    return res.status(200).json(allPosts);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);
    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
};