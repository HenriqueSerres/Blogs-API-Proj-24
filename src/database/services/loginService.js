const { User } = require('../models');
const handleError = require('../utils/handleError');

const loginUser = async (email, password) => {
  if (!email || !password) {
    throw handleError('400', 'Some required fields are missing');
  }
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    throw handleError('400', 'Invalid fields');
  }
  const userData = user.dataValues;
  const { image: imagDB, password: passDB, ...tokenHeader } = userData;
  return tokenHeader;
};

module.exports = {
  loginUser,
};