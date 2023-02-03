import {photos} from './data'

const Gallery =()=>{
    return (
      <>
        <section className="ge-section">
          <h1 className="ge-header">Gallery</h1>
          <div className='underline'></div>
          <div className="ge-container">
            {photos.map((photo) => {
              const { id, title, image_path } = photo;
              return (
                <div key={id} className="ge-item">
                  <img src={image_path} alt={title} />
                  <h2 className="ge-title">{title}</h2>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
}

export default Gallery