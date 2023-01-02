const { getServices, createService } = require("../controllers/event");
const express = require("express");

const router = express.Router();

router.get("/services", getServices);
router.post("/service/new", createService);

module.exports = router;
