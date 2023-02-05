const {
  createCred,
  getCredential,
  loginCred,
} = require("../controllers/credential");
const express = require("express");

const router = express.Router();
router.get("/credentials", getCredential);
router.post("/credential/new", createCred);
router.post("/credential/verify", loginCred);

module.exports = router;
