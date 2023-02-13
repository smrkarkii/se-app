const { check } = require("express-validator");

exports.serviceValidator = [
  check("title").isLength({ min: 3 }).withMessage("must be longer than 3"),
  check("description")
    .isLength({ min: 20 })
    .withMessage("must be longer than 20 letters"),
];

exports.userValidator = [
  check("name").isLength({ min: 3, max: 20 }),
  check("email").isEmail(),
  check("password")
    .isLength({ min: 8 })
    .withMessage("must be 8 letters or more"),
];
exports.contactValidator = [
  check("email").isEmail().withMessage("Must be valid email"),
];
exports.reservationValidator = [
  check("email").isEmail().withMessage("Must be valid email"),
  check("name").isEmpty(),
  check("email").isEmpty(),
  check("date").isEmpty(),
  check("message").isEmpty(),
];
