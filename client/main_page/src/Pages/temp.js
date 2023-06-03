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
      <section className="gallery-section">
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
                  onClick={() => openOverlay(image_path)}
                />
                <h2 className="gallery-title">{title}</h2>
              </div>
            );
          })}
        </div>
      </section>

      <div
        className={`overlay ${selectedImage ? "active" : ""}`}
        onClick={closeOverlay}
      >
        <img src={selectedImage} alt="Full Image" />
      </div>
    </>
  );
};

export default Gallery;
