const Service = require("../models/Service");

exports.getServices = (req, res) => {
  Event.find().then((services) => {
    res.status(400).json({
      services,
    });
  });
};

exports.createService = (req, res) => {
  const event = new Service(req.body);
  console.log("Creating event");
  event.save().then((result) => {
    res.status(400).json({
      result,
    });
  });
};
