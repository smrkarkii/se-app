// import { events } from "./data";/
import postContext from "../context/post/postContext";
import { React, useEffect, useContext } from "react";

const Events = () => {
  const context = useContext(postContext);
  const { posts, getPosts } = context;
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  const ReverseArray = [];
  const length = posts.length;
  for (let index = length - 1; index >= 0; index--) {
    ReverseArray.push(posts[index]);
  }
  return (
    <>
      {(document.title = "ICTC - Events")}
      <section
        className="ge-section"
        style={{
          marginTop: "7rem",
          marginBottom: "2rem",
          borderRadius: "10px",
        }}
      >
        <h1 className="ge-header">Events</h1>
        <div className="underline"></div>
        <div className="ge-container">
          {posts.map((event) => {
            return (
              <div key={event.id} className="ge-item">
                <img src={event.imageUrl} alt={event.title} />
                <h2 className="ge-title">{event.title}</h2>
                <h4 className="ge-title">{event.type}</h4>
                {/* <p className="ge-title">{event.description}</p> */}
                <p className="card-text">
                  <small className="text-muted">
                    By {event.organizer ? event.organizer : "Unknown"}
                    {/* on {new Date(post.date).toGMTString()} */}
                  </small>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Events;
