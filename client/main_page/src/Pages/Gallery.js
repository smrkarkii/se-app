import { photos } from "./data";

import ictcs from "./Gallery/ictc.jpg";
import labarrangement from "./Gallery/labarrangements.jpg";
import complab from "./Gallery/complab.jpg";
import switches from "./Gallery/switches.jpg";
const images = [ictcs, labarrangement, complab, switches];

const Gallery = () => {
  return (
    <>
      {(document.title = "ICTC - Gallery")}
      <section
        className="ge-section"
        style={{
          marginTop: "5rem",
          marginBottom: "2rem",
          borderRadius: "10px",
          paddingBottom: "3rem",
        }}
      >
        <h1 className="ge-header">Gallery</h1>
        <div className="underline"></div>
        <div className="ge-container">
          {photos.map((photo) => {
            const { id, title, image_path } = photo;
            return (
              <div key={id} className="ge-item">
                <img
                  src={images[id - 1]}
                  alt={title}
                  style={{ height: "300px", width: "300px" }}
                />
                <h2 className="ge-title">{title}</h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
