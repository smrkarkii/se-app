const Contact = require("../models/contact");

exports.getContacts = (req, res) => {
  Contact.find().then((Contacts) => {
    res.status(200).json({
      Contacts,
    });
  });
};

exports.createContact = (req, res) => {
  try {
    const contact = new Contact(req.body);
    console.log("Creating Contact");
    contact.save().then((result) => {
      res.status(200).json({
        result,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteContact = async (req, res) => {
  try {
    let contact = contact.findById(req.params.id);
    if (!contact) {
      res.send("No Contact found");
    } else {
      contact = await Contact.findByIdAndDelete(req.params.id);
      res.status(200).json({ Success: "Successfully deleted" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};
