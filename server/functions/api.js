import express from "express";
import ServerlessHttp from "serverless-http";
import bodyParser from "body-parser";

import event_routes from "../routes/event";
import service_routes from "../routes/service";
import user_routes from "../routes/user";
import contact_routes from "../routes/contact";
import booked_routes from "../routes/bookedDates";
import reserve_routes from "../routes/reservation";
import cred_routes from "../routes/credential";

const app = express();

// Middleware
app.use(bodyParser.json());

// Define routes
app.use("/", event_routes);
app.use("/", service_routes);
app.use("/", user_routes);
app.use("/", cred_routes);
app.use("/", reserve_routes);
app.use("/", contact_routes);
app.use("/", booked_routes);

// Set up ServerlessHttp handler
const handler = ServerlessHttp(app);

module.exports.handler = async (event, context) => {
  const result = await handler(event, context);
  return result;
};
