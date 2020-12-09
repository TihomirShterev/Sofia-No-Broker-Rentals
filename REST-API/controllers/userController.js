const { User } = require("../models");
const { jwt, formValidator } = require("../utils");
const { cookie } = require("../config");

module.exports = {
  get: {
    login(req, res, next) {
      res.render("./user/login.hbs");
    },
    register(req, res, next) {
      res.render("./user/register.hbs");
    },
    logout(req, res, next) {
      res.clearCookie(cookie).redirect("/");
    }
  },
  post: {
    register(req, res, next) {
      // console.log(req.body);
      const formValidations = formValidator(req);

      if (!formValidations.isOk) {
        res.render("./user/register.hbs", formValidations.contextOptions);
        return;
      }

      const { username, password } = { ...req.body };

      User.findOne({ username })
        .then(user => {
          if (user) {
            throw new Error("The given username is already in use...");
          }
          // console.log(user);
          return User.create({ username, password });
        })
        .then(user => {
          // console.log(user.toString());

          const token = jwt.createToken(user._id);

          res
            .status(200)
            .cookie(cookie, token, { maxAge: 3600000 }) //
            .redirect("/");
        })
        .catch(e => {
          console.log(e);
          res.redirect("/register");
        });
    },

    login(req, res, next) {
      // console.log(req.body);
      const formValidations = formValidator(req);

      if (!formValidations.isOk) {
        res.render("./user/login.hbs", formValidations.contextOptions);
        return;
      }

      const { username, password } = req.body;

      User.findOne({ username })
        .then(user => {
          return Promise.all([user.comparePasswords(password), user]);
        })
        .then(([isPasswordsMatched, user]) => {
          if (!isPasswordsMatched) {
            throw new Error("The provided password does not match.");
          }

          const token = jwt.createToken(user._id);

          res
            .status(200)
            .cookie(cookie, token, { maxAge: 3600000 }) //
            .redirect("/");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
