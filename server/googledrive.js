const { google } = require("googleapis");
const Multer = require("multer");
const express = require("express");
const app = express();
const GOOGLE_API_FOLDER_ID = "14kuuRl2UfUqguw0vEDplS3kHmn8MQU9R";

const router = express.Router();
const storage = Multer.memoryStorage();
const upload = Multer({ storage });
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

router.get("/file/:id", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const drive = google.drive({ version: "v3", auth });

  try {
    const response = await drive.files.get(
      {
        fileId: req.params.id,
        alt: "media",
      },
      { responseType: "blob" }
    );
    res.type(response.headers["content-type"]);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.post("/upload", upload.single("image"), async (req, res) => {
  const auth = await new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/drive"],
    keyFile: "./googleapi.json",
  });

  const drive = google.drive({ version: "v3", auth });

  try {
    const response = await drive.files.create({
      requestBody: {
        name: req.file.originalname,
        mimeType: req.file.mimetype,
      },
      media: {
        mimeType: req.file.mimetype,
        body: fs.createReadStream(req.file.path),
      },
    });
    res.json({ fileId: response.data.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
