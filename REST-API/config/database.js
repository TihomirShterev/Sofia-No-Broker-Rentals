const mongoose = require("mongoose");
const dbConnectionString = require("./").dbUrl;

const dbConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

module.exports = () => {
  return mongoose.connect(dbConnectionString, dbConnectionOptions);
};
