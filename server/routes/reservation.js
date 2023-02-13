const {
  getReservations,
  createReservation,
  deleteReservation,
} = require("../controllers/Reservation");
const express = require("express");

const router = express.Router();
const { reservationValidator } = require("../validators/validators");

router.get("/reservations", getReservations);
router.post("/reservations/new", reservationValidator, createReservation);
router.delete("/reservations/delete/:id", deleteReservation);

module.exports = router;
