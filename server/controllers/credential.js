const Credential = require("../models/Credential");

exports.createCred = async (req, res) => {
  // let data = req.body;
  let credential = new Credential(req.body);
  await credential
    .save()
    .then(() => {
      console.log("credential  created");
      res.status(200).json({
        credential,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

exports.getCredential = async (req, res) => {
  try {
    await Credential.find().then((credentials) => {
      res.status(200).json({
        credentials,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

exports.verifyCred = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await Credential.findOne({ username });
    if (!user) {
      success = false;
      return res
        .status(404)
        .json({
          success,
          error: "Please try to login with correct credentials",
        });
    }
    const passwordCompare = password == user.password;
    if (!passwordCompare) {
      success = false;
      return res.status(401).json({
        success,
        error: "Incorrect password",
      });
    } else {
      success = true;
      res.status(200).json({ success, message: "successfully logged in" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success, message: "internal server error " });
  }
};
