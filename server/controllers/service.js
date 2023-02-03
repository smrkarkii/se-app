const Service = require("../models/Service");
const { validationResult } = require("express-validator");

exports.getServices = async (req, res) => {
  await Service.find().then((services) => {
    res.status(400).json({
      services,
    });
  });
};

exports.createService = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const service = new Service(req.body);
  console.log("Creating service");
  service.save().then((result) => {
    res.status(400).json({
      result,
    });
  });
};

exports.deleteService = async (req, res) => {
  try {
    let serv = Service.findById(req.params.id);
    if (!serv) {
      res.send("No service found");
    } else {
      serv = await Service.findByIdAndDelete(req.params.id);
      res.status(400).json({ Success: "Successfully deleted" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateService = async (req, res) => {
  try {
    let service = Service.findById(req.params.id);
    if (!service) {
      res.status(404).send("No srvice");
    } else {
      service = await Service.findByIdAndUpdate(req.params.id);
    }
  } catch (err) {
    res.status(500).send("Internal server error");
  }
};
