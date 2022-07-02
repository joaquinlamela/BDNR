const express = require("express");
const router = express.Router();
const UserController = require("./userController");
const userController = new UserController();

router.post("/users/", (req, res, nxt) => userController.create(req, res, nxt));

router.get("/users/:username", (req, res, nxt) =>
  userController.getByUsername(req, res, nxt)
);

router.get("/users/", (req, res, nxt) => userController.getAll(req, res, nxt));

router.patch("/users/:username", (req, res, nxt) =>
  userController.associatePaymentMethod(req, res, nxt)
);

module.exports = router;
