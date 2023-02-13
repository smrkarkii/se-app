const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },

    starting_date: {
      type: Date,
    },
    ending_date: {
      type: Date,
    },
    imageUrl: {
      type: String,
    },

  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
