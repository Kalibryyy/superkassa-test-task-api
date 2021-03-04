require('dotenv').config();

const {
  PORT, NODE_ENV,
} = process.env;
const isProd = NODE_ENV === 'production';
const port = (isProd && PORT) ? PORT : '3001';

module.exports = {
  PORT: port,
};

