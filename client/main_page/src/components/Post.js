import React,{useContext} from 'react'
import { useEffect } from 'react';
import postContext from '../context/post/postContext';
import {Link} from "react-router-dom";
import Spinner from "./Spinner";

import PostItem from './PostItem';

export default function Post() {
  const context = useContext(postContext);
  const{posts,getPosts,loading}=context;
    useEffect(()=>{
        getPosts()
        // eslint-disable-next-line
    },[])
     
    const ReverseArray=[];
    const length=posts.length;
    for (let index = length-1; index >=0; index--) {
      ReverseArray.push(posts[index]);   
    }

  return (
    <>
    <div className='bg-white container rounded'>
      <div className='container'>
      <div className="mt-3 d-flex justify-content-between bg-white align-items-center">
        <h2 className='mx-2 my-2'>
          Posts   </h2>
                <Link to='/admin/postform'><button type="button" className="btn btn-primary">
            Add New <span className="badge bg-success">+</span>
          </button></Link>
    
          </div>
      </div>
      <hr></hr>
      <div className="container">
      {loading && <Spinner />}
      {!loading &&
      ReverseArray.map((post)=>{
        return <PostItem key={post._id} post={post}/>
      })
    }
    <hr></hr>
      </div>
      </div>
    </>
  );
}
