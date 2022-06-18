const express = require("express");
const app = express();
const router = require("./Controller/router");
const cors = require("cors");

module.exports.initServer = async function () {
  app.use(cors());
  app.use(express.urlencoded({ limit: "125mb", extended: false }));
  app.use(express.json({ limit: "125mb" }));
  app.use(router);

  app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
  });
};
