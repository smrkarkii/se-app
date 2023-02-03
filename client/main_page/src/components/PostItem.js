import React,{useContext} from 'react'
import postContext from '../context/post/postContext';

const PostItem = (props) => {
    const context = useContext(postContext);
  const{deletePost}=context; 

  const {post}=props;
  return (
    <div className='container'>
    <div className="card my-3">
    <div className="card-body">
      <div className='d-flex align-items-center'>
      <b><h3 className="card-title">{post.title}</h3></b>

      <i className="fa fa-solid fa-trash mx-2" onClick={()=>{deletePost(post._id)}}></i>
      <i className="far fa-edit mx-2"></i>

      </div>
      <h5 className="card-title">Type: {post.type}</h5>
      
          <p className="card-text">No. of Instructor: {post.instructor}</p>
      <p className='card-text'>
        No. of participants: {post.participants}</p>
      <p className="card-text">{post.description}</p>
      <p className="card-text">
            <small className="text-muted">
              By {post.organizer ? post.organizer : "Unknown"} on {new Date(post.date).toGMTString()}
            </small>
          </p>
      

      
      
    </div>
  </div>
  </div>
  )
}

export default PostItem
