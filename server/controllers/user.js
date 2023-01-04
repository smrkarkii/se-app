const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.createUser = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({ errors: errors.array() });
  }
  try {
    const user = new User(req.body);
    console.log("Creating user");
    user.save().then((result) => {
      res.status(400).json({
        result,
      });
    });
  } catch (err) {
    res.status(500).send("Internal server error");
    console.log(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let serv = User.findById(req.params.id);
    if (!serv) {
      res.send("No user found");
    } else {
      serv = await User.findByIdAndDelete(req.params.id);
      res.status(400).json({ Success: "Successfully deleted" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.loginUser = async (req, res) => {
  //if there are errors, return bad request and the errors
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Please try to login with correct credentials" });
    }
    const passwordCompare = password == user.password;
    if (!passwordCompare) {
      success = false;
      return res.status(500).json({
        success,
        error: "Incorrect password",
      });
    }
    // const data = {
    //   user: {
    //     id: user.id,
    //   },
    // };
    // const authToken = jwt.sign(data, JWT_SECRET);
    // success = true;
    // res.json({ success, authToken });
    res.json("successfully logged in");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error occured");
  }
};
