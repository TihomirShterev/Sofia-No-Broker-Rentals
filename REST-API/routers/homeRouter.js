const { homeController } = require("../controllers");
// const { isAuthNeededMiddleware } = require("../utils");

module.exports = router => {
  router.get("/", homeController.get.home);
  // router.get("/guest", isAuthNeededMiddleware(false), homeController.get.guest); // second way using 2 separate functions instead of one and an authentication requirement
  // router.get("/loggedIn", isAuthNeededMiddleware(), homeController.get.loggedIn);

  return router;
};
