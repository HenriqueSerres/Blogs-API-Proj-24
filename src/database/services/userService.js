const { User } = require('../models');
const handleError = require('../utils/handleError');

const createUser = async (body) => {
  const { email } = body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    throw handleError('409', 'User already registered');
  }
  const newUser = await User.create(body);
  return newUser;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

module.exports = {
  createUser,
  getAllUsers,
};