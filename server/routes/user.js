// const { userValidator } = require("../validators/validators.js");
// const express = require("express");
// const Router = express();
// const { createUser, deleteUser, loginUser } = require("../controllers/user");

// Router.post("/users/signin", userValidator, createUser);
// Router.delete("/users/delete", deleteUser);
// Router.post("/users/login", loginUser);
// //Router.get("users/login");

// module.exports = Router;

const { userValidator } = require("../validators/validators.js");
const express = require("express");
const router = express.Router();
const { createUser, login } = require("../controllers/auth");

router.post("/users/signin", userValidator, createUser);
// Router.delete("/auth/delete", deleteUser);
router.post("/users/login", login);
//Router.get("users/login");

module.exports = router;
