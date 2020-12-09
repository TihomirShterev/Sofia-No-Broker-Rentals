module.exports = (express, app) => {
  const routers = require("../routers")(express.Router());

  app.use("/", routers.homeRouter);
  app.use("/", routers.userRouter);
  app.use("/", routers.itemRouter);
};
