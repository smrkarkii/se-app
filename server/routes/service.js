const { getServices, createService } = require("../controllers/service");
const express = require("express");

const router = express.Router();
const { serviceValidator } = require("../validators/validators");

router.get("/services", getServices);
router.post("/services/new", serviceValidator, createService);

module.exports = router;
