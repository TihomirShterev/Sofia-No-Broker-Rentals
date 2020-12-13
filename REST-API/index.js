global.__basedir = __dirname;
const express = require("express");
const { port, origin } = require("./config");
const cors = require("cors");

const app = express();
const appString = `Server is ready, listening on port: ${port}...`;

app.use((req, res, next) => {
  // // res.header('Access-Control-Allow-Origin', 'true');
  // // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  // res.header('Access-Control-Allow-Origin', '*'); // to work for all routes
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
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
        // origin: 'http://localhost:4200',
        credentials: true
      })
    );

    app.listen(port, console.log(appString));
  })
  .catch(e => console.log(e));
