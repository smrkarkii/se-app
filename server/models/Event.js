const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    type: {
      type: String,
    },
    participants: {
      type: Number,
    },
    instructors: {
      type: Number,
    },
    organizer: {
      type: String,
    },
    date: {
      type: Date,
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
