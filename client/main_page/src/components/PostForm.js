import React,{useContext,useState} from 'react'
import postContext from '../context/post/postContext';
 
export default function PostForm(props) {
  const context = useContext(postContext);
  const{addPost}=context;

  const[post,setPost]=useState({title:"", type:"", instructor:"",participants:"",organizer:"",description:""})
 
  const handleClick=(e)=>{
      e.preventDefault();
      addPost(post.title,post.type,post.instructor,post.participants,post.organizer,post.description);
      setPost({title:"", type:"", instructor:"",participants:"",organizer:"",description:""})
      props.showAlert("New Post Has been Added","success");
  }

  const handleChange=(e)=>{
          setPost({...post,[e.target.name]:e.target.value})
  }
  return (
    <div className='bg-white container rounded'>
    <div className='mt-3 container'>
      <br></br>
        <h2 className='mb-2 text-center'>Fill Event Detail</h2>
        <hr></hr>
      <form>
      <div className="row g-3 mb-2">
  <div className="col"> 
  <label htmlFor="title" className="form-label mx-2">Event Title</label>
    <input type="text" onChange={handleChange} minLength={3} required className="form-control" value={post.title} id="title" name="title"/>
  </div>
  <div className="col">
  <label htmlFor="type" className="form-label mx-2">Event Type</label>
  <input type="text" onChange={handleChange} minLength={3} required className="form-control" value={post.type} id="type" name="type"/>
  </div>

</div>

<div className="row g-3 mb-2">
  <div className="col"> 
  <label htmlFor="instructor" className="form-label mx-2">Number Of Instructor</label>
    <input type="number" onChange={handleChange} className="form-control" id="instructor" value={post.instructor} name="instructor"/>
  </div>
  <div className="col">
  <label htmlFor="participants" className="form-label mx-2">No. of Participants</label>
  <input type="number" onChange={handleChange} className="form-control" id="participants" value={post.participants} name="participants"/>
  </div>

</div>

<div className=' mb-2'>
<label htmlFor="organizer" className="form-label mx-2">organizer</label>
<input type="text" onChange={handleChange} minLength={3} required className="form-control" id="organizer" value={post.organizer} name="organizer"/>
</div>


<div className=' mb-2'>
<label htmlFor="description" className="form-label mx-2">Description</label>
<textarea className="form-control" onChange={handleChange} minLength={5} required id="description" value={post.description} name="description" rows="3"></textarea>
</div>

<button disabled={post.title.length<3 || post.description.length<5} className="btn btn-primary mt-2" onClick={handleClick} type="submit">Submit</button>
<hr></hr>
      </form>
    </div>
    </div>
  )
}
