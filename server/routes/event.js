const { getEvents, createEvent } = require("../controllers/event");
const express = require("express");

const router = express.Router();

router.get("/events", getEvents);
router.post("/event/new", createEvent);

module.exports = router;
