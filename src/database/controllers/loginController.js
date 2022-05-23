const loginService = require('../services/loginService');
const generateToken = require('../utils/generateToken');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.loginUser(email, password);
    const token = generateToken(login);
    if (token) return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  loginUser,
};