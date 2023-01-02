import React,{useContext} from 'react'
import { useEffect } from 'react';
import ServiceTable from './ServiceTable'
import {Link} from "react-router-dom";
import postContext from '../context/post/postContext';
import Spinner from "./Spinner";

export default function Services() {
  const context = useContext(postContext);
  const{services,getServices,loading}=context;
    useEffect(()=>{
        getServices()
        // eslint-disable-next-line
    },[])
    const ReverseArray=[];
    const length=services.length;
    for (let index = length-1; index >=0; index--) {
      ReverseArray.push(services[index]);   
    }
  return (
<>
<div className='bg-white container rounded'>
      <div className='container'>
      <div className=" mt-3 d-flex justify-content-between bg-white align-items-center">
        <h2 className='mx-2 my-2'>
          Services   </h2>
                <Link to='/admin/serviceform'><button type="button" className="mx-2 btn btn-primary">
            Add New <span className="badge bg-success">+</span>
          </button></Link>
          </div>
      </div>
      <hr></hr>
      <div className="container">
      {loading && <Spinner />}
      {!loading &&
      ReverseArray.map((service)=>{
        return <ServiceTable key={service._id} service={service}/>
      })
    }
    <hr></hr>
      </div>
      </div>
      
    </> 
  )
}
