const express = require("express");

const router = express.Router();

const controller = require("../controller/controller");

router.route("/create/signup").post(controller.create);

module.exports = router;
