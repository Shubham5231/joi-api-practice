require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};
