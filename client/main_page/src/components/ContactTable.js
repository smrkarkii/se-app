import React, { useContext } from "react";
import postContext from "../context/post/postContext";

export default function ContactTable(props) {
  const context = useContext(postContext);
  const { deleteContact } = context;

  const { contact } = props;
  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <b>
              <h3 className="card-title">{contact.name}</h3>
            </b>

            <i
              className="fa fa-solid fa-trash mx-2"
              onClick={() => {
                deleteContact(contact._id);
              }}
            ></i>
            <i className="far fa-edit mx-2"></i>
          </div>
          <h5 className="card-title">Email: {contact.email}</h5>

          <p className="card-text">{contact.description}</p>
          <p className="card-text">
            <small className="text-muted">
              {new Date(contact.date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
