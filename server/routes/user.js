const { userValidator } = require("../validators/validators.js");
const express = require("express");
const Router = express();
const { createUser, deleteUser, loginUser } = require("../controllers/user");

Router.post("/users/signup", userValidator, createUser);
Router.delete("/users/delete", deleteUser);
Router.post("/users/login", loginUser);
//Router.get("users/login");

module.exports = Router;
