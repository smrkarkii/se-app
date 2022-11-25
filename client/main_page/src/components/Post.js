import React from "react";
import Table from "./Table";
import {Link} from "react-router-dom";

export default function Post() {
  return (
    <>
      <div className="container">
        <h1>
          Posts  
                <Link to='/postform'><button type="button" className="mx-2 btn btn-primary">
            Add New <span className="badge bg-success">+</span>
          </button></Link>
        </h1>
      </div>

      <div className="container">
        <Table />
        
      </div>
    </>
  );
}
