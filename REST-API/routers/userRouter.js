const { userController } = require("../controllers");
const { isAuthNeededMiddleware } = require("../utils");

module.exports = router => {
  router.get("/login", isAuthNeededMiddleware(false), userController.get.login);
  router.get("/register", isAuthNeededMiddleware(false), userController.get.register);
  // router.get("/profile", isAuthNeededMiddleware(), userController.get.profile);
  router.get("/logout", isAuthNeededMiddleware(true), userController.get.logout);

  router.post(
    "/register", //
    isAuthNeededMiddleware(false),
    userController.post.register
  );
  router.post("/login", isAuthNeededMiddleware(false), userController.post.login);

  return router;
};
