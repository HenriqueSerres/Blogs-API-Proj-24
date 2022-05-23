const userService = require('../services/userService');
const generateToken = require('../utils/generateToken');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email } = req.body;
    const newUser = await userService.createUser(req.body);
    if (newUser) {
      const token = generateToken(displayName, email);
      return res.status(201).json({ token });
    }    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createUser,
};