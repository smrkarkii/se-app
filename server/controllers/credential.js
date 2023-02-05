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
  await Credential.find().then((credentials) => {
    res.status(400).json({
      credentials,
    });
  });
};

exports.verifyCred = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await Credential.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Please try to login with correct credentials" });
    }
    const passwordCompare = password == user.password;
    if (!passwordCompare) {
      success = false;
      return res.status(500).json({
        error: "Incorrect password",
      });
    } else {
      res.json({ success: "successfully logged in" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server error occured");
  }
};
