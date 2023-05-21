const mongoose = require("mongoose");

const bookdateSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
});

const Bookdate = mongoose.model("Bookdate", bookdateSchema);
module.exports = Bookdate;
