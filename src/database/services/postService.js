const { Op } = require('sequelize');
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

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  if (!post) throw handleError('404', 'Post does not exist');
  return post;
};

const postUpDate = async ({ id, email, title, content }) => {
  const user = await User.findOne({ where: { email } });
  if (user.dataValues.id !== Number(id)) {
    throw handleError('401', 'Unauthorized user');
  }
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
    const editedPost = await getPostById(id);
    return editedPost;
};

const deletePost = async ({ id, email }) => {
  const post = await BlogPost.findByPk(id);
  if (!post) throw handleError('404', 'Post does not exist');
  const user = await User.findOne({ where: { email } });
  if (user.dataValues.id !== post.dataValues.userId) throw handleError('401', 'Unauthorized user');
  await BlogPost.destroy(
    { where: { id } },
  );
    return post;
};

const searchPost = async (q) => {
  const post = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],      
    },
    include: [
     { model: User, as: 'user', attributes: { exclude: 'password' } },
     { model: Category, as: 'categories', through: { attributes: [] } },
   ],
  });
  return post;
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  postUpDate,
  deletePost,
  searchPost,
};