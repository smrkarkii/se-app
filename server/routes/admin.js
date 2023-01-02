const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const express = require("express");
const Event = require("../models/Event");
const Service = require("../models/Service");

const app = express();

//mongoose adapter

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});
const adminOptions = {
  // We pass Category to `resources`
  resources: [
    Event,
    {
      resource: Service,
      options: {
        id: "services",
      },
    },
  ],
};
const admin = new AdminJS(adminOptions);
const adminRouter = AdminJSExpress.buildRouter(admin);

module.exports = adminRouter;

// const Admin = require("adminjs");
// const AdminExpress = require("@adminjs/express");
// const AdminMongoose = require("@adminjs/mongoose");

// const mongoose = require("mongoose");

// Admin.registerAdapter(AdminMongoose);
// const express = require("express");
// const app = express();

// const admin = new Admin({
//   databases: [mongoose],
//   rootPath: "/admin",
// });
// const ADMIN = {
//   email: process.env.ADMIN_EMAIL || "admin@gmail.com",
//   password: process.env.ADMIN_PASSWORD || "karki",
// };
// const router = AdminExpress.buildAuthenticatedRouter(admin, {
//   cookieName: process.env.ADMIN_COOKIE_NAME || "admin",
//   cookiePassword: process.env.ADMIN_COOKIE_PASS || "password",
//   authenticate: async (email, password) => {
//     if (email === ADMIN.email && password === ADMIN.password) {
//       return ADMIN;
//     } else {
//       return null;
//     }
//   },
// });
// module.exports = router;
