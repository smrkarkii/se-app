import React from 'react'
import ServiceTable from './ServiceTable'
import {Link} from "react-router-dom";

export default function Services() {
  return (
<>
      <div className="container">
        <h1>
          Services  
                <Link to='/serviceform'><button type="button" className="mx-2 btn btn-primary">
            Add New <span className="badge bg-success">+</span>
          </button></Link>
        </h1>
      </div>

      <div className="container">
        <ServiceTable/>
      </div>
    </> 
  )
}
