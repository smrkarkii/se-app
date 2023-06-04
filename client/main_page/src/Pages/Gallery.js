import { photos } from "./data";
import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openOverlay = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {(document.title = "ICTC - Gallery")}
      <section
        className="gallery-section"
        style={{
          marginTop: "5rem",
          marginBottom: "2rem",
          borderRadius: "10px",
          paddingBottom: "3rem",
        }}
      >
        <h1 className="gallery-header">Gallery</h1>
        <div className="underline"></div>
        <div className="gallery-container">
          {photos.map((photo) => {
            const { id, title, image_path } = photo;
            return (
              <div key={id} className="gallery-item">
                <img
                  src={image_path}
                  alt={title}
                  onClick={() =>
                    openOverlay(
                      "https://ictc.ioe.edu.np/img/gallery/" + image_path
                    )
                  }
                />
                <h2 className="gallery-title">{title}</h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
