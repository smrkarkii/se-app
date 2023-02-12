import React, { useContext, useState } from "react";
import postContext from "../context/post/postContext";
import ImageUploader from "./ImageUrl";

export default function ServiceForm() {
  const context = useContext(postContext);
  const { addService } = context;
  const [imageUrl1, setImageUrl1] = useState("");
  const [clicked, setClicked] = useState(false);

  const [service, setService] = useState({
    title: "",
    description: "",
    starting_date: "",
    ending_date: "",
    imageUrl1: "",
  });

  const handleClick = (e) => {
    setClicked(true);
    e.preventDefault();
    addService(
      service.title,
      service.description,
      service.starting_date,
      service.ending_date,
      imageUrl1
    );
    setService({
      title: "",
      description: "",
      starting_date: "",
      ending_date: "",
    });
  };
  const dataFromChild = (data) => {
    setImageUrl1(data);
  };

  const handleChange = (e) => {
    setClicked(false);
    setService({ ...service, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white container rounded">
      <div className="container mt-3">
        <br></br>
        <div className="text-center">
          <span
            style={{
              backgroundColor: "#00028d",
              borderRadius: "5px",
              fontSize: "2rem",
              color: "white",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
            className="mb-2"
          >
            Fill Service Detail
          </span>
        </div>
        <hr></hr>
        <form
          method="POST"
          action="/profile-upload-multiple"
          enctype="multipart/form-data"
        >
          <div className=" mb-2">
            <label htmlFor="title" className="form-label mx-2">
              Service Title
            </label>
            <input
              type="text"
              onChange={handleChange}
              required
              className="form-control"
              value={service.title}
              id="title"
              name="title"
            />
          </div>

          <div className=" mb-2">
            <label htmlFor="description" className="form-label mx-2">
              Description
            </label>
            <textarea
              className="form-control"
              required
              onChange={handleChange}
              value={service.description}
              id="description"
              name="description"
              rows="3"
            ></textarea>
          </div>

          <p> Upload an image </p>
          <ImageUploader dataFromChild={dataFromChild} clicked={clicked} />

          <div className="row g-3 mt-2">
            <div className="col">
              <label htmlFor="starting_date" className="mb-2">
                Starting Date <i className="fas fa-calendar input-prefix"></i>
              </label>
              <input
                placeholder="Select date"
                onChange={handleChange}
                type="date"
                id="starting_date"
                value={service.starting_date}
                name="starting_date"
                className="form-control"
              />
            </div>

            <div className="col">
              <label htmlFor="ending_date" className="mb-2">
                Ending Date <i className="fas fa-calendar input-prefix"></i>
              </label>
              <input
                placeholder="Select date"
                onChange={handleChange}
                type="date"
                id="ending_date"
                value={service.ending_date}
                name="ending_date"
                className="form-control"
              />
            </div>
          </div>

          <button
            style={{
              backgroundColor: "#00028d",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            disabled={
              service.title.length < 3 || service.description.length < 20
            }
            className="btn btn-primary mt-3"
            onClick={handleClick}
            type="submit"
          >
            Submit
          </button>
          <hr></hr>
        </form>
      </div>
    </div>
  );
}
