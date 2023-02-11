import React, { useContext } from "react";
import postContext from "../context/post/postContext";

const ReservationTable = (props) => {
  const context = useContext(postContext);
  const { deleteReservation } = context;

  const { reservation } = props;
  return (
    <div className="container">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <b>
              <h3 className="card-title">{reservation.name}</h3>
            </b>

            <i
              className="fa fa-solid fa-trash mx-2"
              onClick={() => {
                deleteReservation(reservation._id);
              }}
            ></i>
          </div>
          <h5 className="card-title">Email: {reservation.email}</h5>

          <p className="card-text">{reservation.message}</p>
          <p className="card-text">
            <small className="text">
              Date Reserved: {new Date(reservation.date).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationTable;
