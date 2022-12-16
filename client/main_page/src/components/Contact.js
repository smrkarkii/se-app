import React,{useContext} from 'react'
import { useEffect } from 'react';
import postContext from '../context/post/postContext';
import ContactTable from './ContactTable';
import Spinner from "./Spinner";

const Contact = () => {
    const context = useContext(postContext);
  const{contacts,getContacts,loading}=context;
    useEffect(()=>{
        getContacts()
        // eslint-disable-next-line
    },[])
    const ReverseArray=[];
    const length=contacts.length;
    for (let index = length-1; index >=0; index--) {
      ReverseArray.push(contacts[index]);   
    }
  return (
    <>
    <div className='bg-white container rounded'>
      <div className='container'>
      <div className="mt-3 d-flex justify-content-between bg-white align-items-center">
    <h2 className='mx-2 my-2'>
          Contacts   </h2>
          </div>
          </div>
          <hr></hr>
          <div className="container">
          {loading && <Spinner />}
          {!loading &&
            
          ReverseArray.map((contact)=>{
            return <ContactTable key={contact._id} contact={contact}/>
          })
        }
        <hr></hr>
          </div>
          </div>
          </>
  )
}

export default Contact
