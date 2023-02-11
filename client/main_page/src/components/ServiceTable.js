import React, { useContext } from "react";
import postContext from "../context/post/postContext";

export default function ServiceTable(props) {
  const context = useContext(postContext);
  const { deleteService } = context;

  const { service } = props;
  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <b>
              <h3 className="card-title">{service.title}</h3>
            </b>

            <i
              className="fa fa-solid fa-trash mx-2"
              onClick={() => {
                deleteService(service._id);
              }}
            ></i>
          </div>
          <p className="card-text">{service.description}</p>
          <p className="card-text">
            Starting From: {new Date(service.starting_date).toGMTString()}
          </p>
          <p className="card-text">
            Ending Date: {new Date(service.ending_date).toGMTString()}
          </p>
        </div>
      </div>
    </div>
  );
}
