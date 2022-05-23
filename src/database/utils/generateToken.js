const jwt = require('jsonwebtoken');
require('dotenv').config();

const senhasecreta = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, senhasecreta, jwtConfig);

  return token;
};

module.exports = generateJWT;