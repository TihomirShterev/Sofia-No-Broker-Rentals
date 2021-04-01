const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 4201,
    dbURL: 'mongodb://localhost:27017/ItemsDB-Angular',
    origin: ['http://localhost:3000', 'http://localhost:4200']
  },
  production: {
    port: process.env.PORT || 4201,
    dbURL: process.env.DB_URL_CREDENTIALS,
    origin: []
  }
};

module.exports = config[env];
