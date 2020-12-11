global.__basedir = __dirname;
const express = require("express");
const { port, origin } = require("./config");
const cors = require("cors");

const app = express();
const appString = `Server is ready, listening on port: ${port}...`;

app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:4200/');
  res.header('Access-Control-Allow-Origin', '*'); // to work for all routes
  next();
});

require("./config/database")()
  .then(() => {
    require("./config/express")(express, app);
    require("./config/routes")(express, app);

    app.use(
      cors({
        // origin: true,
        origin,
        credentials: true
      })
    );

    app.listen(port, console.log(appString));
  })
  .catch(e => console.log(e));
