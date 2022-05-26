const { BlogPost, Category, User } = require('../models');
const handleError = require('../utils/handleError');

const addPost = async ({ id, title, content, categoryIds }) => {
  const categories = await Category.findAndCountAll({ where: { id: categoryIds } });
  if (categoryIds.length !== categories.count) {
    throw handleError('400', '"categoryIds" not found');
  }
  const newPost = await BlogPost.create({ 
    title,
    content,
    userId: id,
    updated: new Date(),
    published: new Date(),
  });
  console.log(categories);
  await newPost.addCategories(categoryIds);
  return newPost;
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return allPosts;
};

module.exports = {
  addPost,
  getAllPosts,
};