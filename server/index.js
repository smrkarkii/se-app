const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const event_routes = require("./routes/event");
const service_routes = require("./routes/service");
const user_routes = require("./routes/user");
const cred_routes = require("./routes/credential");
const reserve_routes = require("./routes/reservation");
var cors = require("cors");

app.use(cors());
//body-parser

mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log("mongo db connected");
});

app.use("/api/auth", require("./routes/admin"));
app.use(bodyParser.json());

//routing
app.use("/", event_routes);
app.use("/", service_routes);
app.use("/", user_routes);
app.use("/", cred_routes);
app.use("/", reserve_routes);
//app.use("/", )

//database connecting to mongo db

app.listen(8000, () => {
  console.log("Running");
  console.log("admin Running at /admin");
});
