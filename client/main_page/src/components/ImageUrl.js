import React, { useState } from "react";
import axios from "axios";

const BOT_TOKEN = "5639755535:AAFWlHOyhBANI0u-6GFHspbkP4h5E-aBoxY";
const CHAT_ID = "5891316395";

const sendPhoto = async (photo, caption) => {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;

  const formData = new FormData();
  formData.append("photo", photo);
  formData.append("chat_id", CHAT_ID);
  if (caption) {
    formData.append("caption", caption);
  }

  const response = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

const fileUrl = async (file_id) => {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/getFile?file_id=${file_id}`;
  const response = await axios.post(url);
  return response.data;
};

function ImageUploader({ dataFromChild }) {
  const [imageUrl, setImageUrl] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const response = await sendPhoto(file, "Photo being uploaded from ICTC");
    const file_id =
      response.result.photo[response.result.photo.length - 1].file_id;
    const fileUrlResponse = await fileUrl(file_id);
    const final_url = fileUrlResponse.result.file_path;
    const image_url = `https://api.telegram.org/file/bot${BOT_TOKEN}/${final_url}`;
    setImageUrl(image_url);
    dataFromChild(image_url);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <input type="file" onChange={handleFileUpload} />
      <br></br>
      {imageUrl}
      <br></br>
      {imageUrl ? (
        <img
          src={imageUrl}
          style={{ height: "50px", width: "auto" }}
          alt="uploaded"
        />
      ) : null}
    </div>
  );
}

export default ImageUploader;
