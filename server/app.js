const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/config/database.js");
const route = require("./src/routes/routes.js");

app.use(cors());
app.use(bodyParser.json());
app.use("/signup", route);
db.on("open", () => {
  app.listen(8080, () => {
    console.log("server is runnings");
  });
});

db.on("error", (err) => {
  console.log("server not running", err);
});
