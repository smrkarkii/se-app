const Event = require("../models/Event");

exports.getEvents = (req, res) => {
  Event.find().then((events) => {
    res.status(400).json({
      events,
    });
  });
};

exports.createEvent = (req, res) => {
  const event = new Event(req.body);
  console.log("Creating event");
  event.save().then((result) => {
    res.status(400).json({
      result,
    });
  });
};
