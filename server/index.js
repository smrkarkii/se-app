const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const event_routes = require("./routes/event");
const ejs = require("ejs");

app.set("view engine", "ejs");
//body-parser
app.use(bodyParser.json());

//routing
app.use("/", event_routes);
app.get("/home", (req, res) => {
  res.render("pay.ejs");
});
app.get("/success", (req, res) => {
  res.render("success.ejs");
});
app.get("/failure", (req, res) => {
  res.render("failure.ejs");
});
//app.use("/", )

//database connecting to mongo db
mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log("mongo db connected");
});
app.listen(8000, () => {
  console.log("Running");
});
