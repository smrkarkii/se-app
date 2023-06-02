import { photos } from "./data";

const Gallery = () => {
  return (
    <>
      <section
        className="gallery-section"
        style={{
          marginTop: "5rem",
          marginBottom: "2rem",
          borderRadius: "10px",
          paddingBottom:"3rem"
        }}
      >
        <h1 className="gallery-header">Gallery</h1>
        <div className="underline"></div>
        <div className="gallery-container">
          {photos.map((photo) => {
            const { id, title, image_path } = photo;
            return (
              <div key={id} className="gallery-item">
                <img src={image_path} alt={title} style={{height:"300px", width:"300px"}}/>
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
