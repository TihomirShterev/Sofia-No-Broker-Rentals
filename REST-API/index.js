const express = require("express");
const { port } = require("./config");
const cors = require("cors");

const app = express();
const appString = `Server is ready, listening on port: ${port}...`;

require("./config/database")()
  .then(() => {
    require("./config/express")(express, app);
    require("./config/routes")(express, app);

    app.use(
      cors({
        origin: true,
        // origin: config.origin,
        credentials: true
      })
    );

    app.listen(port, console.log(appString));
  })
  .catch(e => console.log(e));
