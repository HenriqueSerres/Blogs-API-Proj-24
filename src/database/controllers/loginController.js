const loginService = require('../services/loginService');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const login = await loginService.loginUser(email, password);
    if (login) return res.status(200).json(login.token);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  loginUser,
};