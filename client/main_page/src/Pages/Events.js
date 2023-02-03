import { events } from "./data";

const Events = () => {
  return (
    <>
      <section className="ge-section">
        <h1 className="ge-header">Events</h1>
        <div className="underline"></div>
        <div className="ge-container">
          {events.map((event) => {
            const { id, title, image_path } = event;
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
};

export default Events;
