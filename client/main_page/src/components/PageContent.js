import React, {useState} from 'react'
import './PageContent.css';
import Reservation from './Reservation';
import Post from './Post';
import Services from './Services';
import SideBar from './SideBar';
import PostForm from './PostForm';
import ServiceForm from './ServiceForm';

import ContactTable from './ContactTable';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default function PageContent() {
    const[show,setShow]=useState(true);

    const handleOnClick=()=>{
        if (show===true){
            setShow(false);
        }
        else{
            setShow(true);
        }
    }



  return (
    <>
    <Router>
    <div className="d-flex"  id="wrapper">
    {
        show?<SideBar/>:null
    }
    {/* ----------------Page Content Begins--------------- */}
<div id="page-content-wrapper">
    {/* --------------Navbar Begins------------------ */}
<nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
      <div className="d-flex align-items-center">
        <i onClick={handleOnClick}
          className="fas fa-align-left primary-text fs-4 me-3 "
          id="menu-toggle"
        ></i>
        <h2 className="fs-2 m-0">Dashboard</h2>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle second-text fw-bold"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user me-2"></i>Admin
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="/">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    {/* -------------------------Navbar Ends--------------------- */}
            <div className="container-fluid px-4">
                <div className="row g-3 my-2">
                <div className="col-md-3">
                        <div className="p-3 bg-dark shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div className='text-white'>
                                <h3 className="fs-3">6</h3>
                                <p className="fs-6">Events Published</p>
                            </div>
                            <i
                                className="fas fa fa-calendar fs-3 primary-text border rounded-full secondary-bg p-1"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-dark shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div className='text-white'>
                                <h3 className="fs-3">88</h3>
                                <p className="fs-6">Total Reservations</p>
                            </div>
                            <i
                                className="fas fa-solid fa-calendar-check fs-3 primary-text border rounded-full secondary-bg p-1"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-dark shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div className='text-white'>
                                <h3 className="fs-3">5</h3>
                                <p className="fs-6">Contacts</p>
                            </div>
                            <i className="fas fa-solid fa-address-book fs-3 primary-text border rounded-full secondary-bg p-1"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="p-3 bg-dark shadow-sm d-flex justify-content-around align-items-center rounded">
                        <div className='text-white'>
                                <h3 className="fs-3">53</h3>
                                <p className="fs-6">Payment Received</p>
                            </div>
                            <i
                                className="fas fa-sharp fa-solid fa-cash-register fs-3 primary-text border rounded-full secondary-bg p-1"></i>
                        </div>
                    </div>
                    </div>
                    
            <Routes>
          <Route path='/post' element={<Post/>}/>
          <Route path='/services' element={<Services/>} />
          <Route path='/reservation' element={<Reservation/>} />
          <Route path='/contact' element={<ContactTable/>} />
          <Route path='/postform' element={<PostForm/>} />
          <Route path='/serviceform' element={<ServiceForm/>} />
          

              </Routes>
                    
              
                    

            </div>
        </div>
        </div>
        </Router>
        </>
  )
}
