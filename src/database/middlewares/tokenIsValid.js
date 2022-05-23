const jwt = require('jsonwebtoken');
require('dotenv').config();

const senhasecreta = process.env.JWT_SECRET;

const tokenIsValid = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token is required' });
    }

    const decoded = jwt.verify(token, senhasecreta);

    req.user = decoded;

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

module.exports = tokenIsValid;