const { body } = require("express-validator");

module.exports = [body("username", "The username should be at least 5 characters ").isLength({ min: 5 }), body("username", "The username should consist only english letter and digits ").isAlphanumeric("en-US"), body("password", "The password should be at least 5 characters").isLength({ min: 5 }), body("password", "The password should consist only english letter and digits ").isAlphanumeric("en-US"), body("repeatPassword").custom(customRepeatPasswordCheck)];

function customRepeatPasswordCheck(repeatPassword, { req }) {
  if (repeatPassword !== req.body.password) {
    throw new Error("Repeat password does not match password");
  }

  return true;
}
