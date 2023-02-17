import React, { useState } from "react";
import axios from "axios";
import loader from "./loading image.gif";

function ImageUploader() {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const handleFileUpload = async (e) => {
    setSelectedFile(e.target.files[0]);
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      console.log("formdata", formData);
      const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      const fileId = data.fileId;
      const file = await fetch(`/file/${fileId}`);
      const blob = await file.blob();
      setImageUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="row g-3 mb-2">
          <div
            className="col"
            style={{
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
              marginLeft: "7px",
              marginTop: "5.5px",
            }}
          >
            <input
              // ref={inputRef}
              style={{
                marginLeft: "5px",
                marginTop: "9px",
                marginBottom: "10px",
              }}
              type="file"
              onChange={handleFileUpload}
            />
          </div>
          <div className="col">
            {loading ? (
              <img
                src={loader}
                alt="Uploading File hold"
                style={{ height: "40px", width: "100px" }}
              />
            ) : null}
          </div>
        </div>
      ) : (
        <div className="row g-3 mb-2">
          <div
            className="col"
            style={{
              borderRadius: "5px",
              border: "1px solid #ccc",
              outline: "none",
              marginLeft: "7px",
              marginTop: "5.5px",
            }}
          >
            <input
              // ref={inputRef}
              style={{
                marginLeft: "5px",
                marginTop: "9px",
                marginBottom: "10px",
              }}
              type="file"
              onChange={handleFileUpload}
            />
            {imageUrl && <img src={imageUrl} alt="Uploaded" />}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageUploader;
