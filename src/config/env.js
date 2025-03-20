const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mongodbUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV
};