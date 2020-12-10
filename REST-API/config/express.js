const path = require("path");
const cookieParser = require("cookie-parser");
const { authMiddleware } = require("../utils");

module.exports = (express, app) => {
  app.use(express.static("static"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(cookieParser());

  app.use(authMiddleware);

  app.use(express.static(path.resolve(__basedir, "static")));
};
