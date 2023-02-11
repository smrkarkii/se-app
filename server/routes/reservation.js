const {
  getReservations,
  createReservation,
  deleteReservation,
} = require("../controllers/Reservation");
const express = require("express");

const router = express.Router();
const { ReservationValidator } = require("../validators/validators");

router.get("/reservations", getReservations);
router.post("/reservations/new", createReservation);
router.delete("/reservations/delete/:id", deleteReservation);

module.exports = router;
