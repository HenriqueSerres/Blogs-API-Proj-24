const { User } = require('../models');
const handleError = require('../utils/handleError');

const loginUser = async (email, password) => {
  if (!email || !password) {
    throw handleError('400', 'Some required fields are missing');
  }
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    throw handleError('400', 'Invalid fields');
  }
  return user;
};

module.exports = {
  loginUser,
};