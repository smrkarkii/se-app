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
const contact_routes = require("./routes/contact");
const booked_routes = require("./routes/bookedDates");
var cors = require("cors");
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: "https://ictc-frontend.vercel.app", // Replace with your frontend URL
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//body-parser

mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log("mongo db connected");
});

app.use(bodyParser.json());

//routing
app.use("/", event_routes);
app.use("/", service_routes);
app.use("/", user_routes);
app.use("/", cred_routes);
app.use("/", reserve_routes);
app.use("/", contact_routes);
app.use("/", booked_routes);
//app.use("/", )

//database connecting to mongo db

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
