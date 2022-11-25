import React from 'react'
import './SideBar.css';
import {Link} from "react-router-dom";

export default function SideBar() {
  return (
          <div className="bg-dark" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    className="fas fa-user-secret me-2"></i>ICTC-ADMIN</div>
            <div className="list-group list-group-flush my-3">
                <Link to="" className="list-group-item list-group-item-action bg-transparent second-text active"><i
                        className="fas fa-tachometer-alt me-2"></i>Dashboard</Link>
                <Link to="/post" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-solid fa-pen me-2"></i>Posts</Link>
                <Link to="/services" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-solid fa-calendar me-2"></i>Services</Link>
                <Link to="/contact" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-solid fa-address-book me-2"></i>Contacts</Link>
                <Link to="/reservation" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-solid fa-calendar-check me-2"></i>Reservations</Link>
                <Link to="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-solid fa-sharp fa-credit-card me-2"></i>Payments</Link>
                <Link to="/" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                        className="fas fa-power-off me-2"></i>Logout</Link>
            </div>
            </div>
  )
}
