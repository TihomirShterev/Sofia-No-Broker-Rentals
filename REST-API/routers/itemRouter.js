const { itemController } = require("../controllers");
const { isAuthNeededMiddleware } = require("../utils");

module.exports = router => {
  router.get("/items", isAuthNeededMiddleware(), itemController.get.items);
  router.get("/create", isAuthNeededMiddleware(), itemController.get.create);
  router.get("/details/:itemId", isAuthNeededMiddleware(), itemController.get.details);
  router.get("/edit/:itemId", isAuthNeededMiddleware(), itemController.get.edit);
  router.get("/delete/:itemId", isAuthNeededMiddleware(), itemController.get.delete);
  router.get("/increment/:itemId", isAuthNeededMiddleware(), itemController.get.increment);

  router.post("/create", isAuthNeededMiddleware(), itemController.post.create);
  router.post("/edit/:itemId", isAuthNeededMiddleware(), itemController.post.edit);

  return router;
};
