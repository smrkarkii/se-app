const {
  createCred,
  getCredential,
  verifyCred,
} = require("../controllers/credential");
const express = require("express");

const router = express.Router();
router.get("/credentials", getCredential);
router.post("/credential/new", createCred);
router.post("/credential/verify", verifyCred);

module.exports = router;
