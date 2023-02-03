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
exports.deleteEvent = async (req, res) => {
  try {
    let event = Event.findById(req.params.id);
    if (!event) {
      res.send("No event found");
    } else {
      event = await Event.findByIdAndDelete(req.params.id);
      res.status(400).json({ Success: "Successfully deleted" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateEvent = async (req, res) => {
  try {
    let event = Event.findById(req.params.id);
    if (!event) {
      res.status(404).send("No srvice");
    } else {
      event = await Event.findByIdAndUpdate(req.params.id);
    }
  } catch (err) {
    res.status(500).send("Internal server error");
  }
};
