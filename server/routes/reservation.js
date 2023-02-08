const {
  getReservations,
  createReservation,
} = require("../controllers/Reservation");
const express = require("express");

const router = express.Router();
const { ReservationValidator } = require("../validators/validators");

router.get("/reservations", getReservations);
router.post("/reservations/new", createReservation);

module.exports = router;
