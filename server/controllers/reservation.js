const Reservation = require("../models/Reservation");
// const { validationResult } = require("express-validator");

exports.getReservations = async (req, res) => {
  await Reservation.find().then((reservations) => {
    res.status(400).json({
      reservations,
    });
  });
};

exports.createReservation = async (req, res) => {
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  const reservation = new Reservation(req.body);
  console.log("Creating reservation");
  reservation.save().then((result) => {
    res.status(400).json({
      result,
    });
  });
};

exports.deleteReservation = async (req, res) => {
  try {
    let serv = Reservation.findById(req.params.id);
    if (!serv) {
      res.send("No Reservation found");
    } else {
      serv = await Reservation.findByIdAndDelete(req.params.id);
      res.status(400).json({ Success: "Successfully deleted" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateReservation = async (req, res) => {
  try {
    let Reservation = Reservation.findById(req.params.id);
    if (!Reservation) {
      res.status(404).send("No srvice");
    } else {
      Reservation = await Reservation.findByIdAndUpdate(req.params.id);
    }
  } catch (err) {
    res.status(500).send("Internal server error");
  }
};
