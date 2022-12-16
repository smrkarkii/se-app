import React from 'react'
import {photos} from './data'

const Events = () => {
  return (
    <>
    <div className="ge-container">
      {photos.map((photo) => {
        const { id, title, image_path } = photo;
        return (
          <div key={id} className="ge-item">
            <img
              src={ image_path }
              alt={title}
            />
            <h2 className="title">{title}</h2>
          </div>
        );
      })}
    </div>
  </>
  )
}

export default Events
