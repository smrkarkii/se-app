import React from 'react'

export default function PostForm() {
  return (
    <div className='container'>
        <h2 className='mb-2'>Event Detail</h2>
      <form>
      <div className="row g-3 mb-2">
  <div className="col"> 
  <label for="formGroupExampleInput" className="form-label mx-2">Event Title</label>
    <input type="text" className="form-control" placeholder="" aria-label="Event Title"/>
  </div>
  <div className="col">
  <label for="formGroupExampleInput" className="form-label mx-2">Event Type</label>
  <select className="form-select" aria-label="Default select example">
  <option value="1">Training</option>
  <option value="2">Competition</option>
  <option value="3">Others
  </option>
</select>
  </div>

</div>

<div className="row g-3 mb-2">
  <div className="col"> 
  <label for="formGroupExampleInput" className="form-label mx-2">Number Of Instructor</label>
    <input type="number" className="form-control" placeholder="" aria-label=""/>
  </div>
  <div className="col">
  <label for="formGroupExampleInput" className="form-label mx-2">Number Of Participants</label>
  <input type="number" className="form-control" placeholder="" aria-label=""/>
  </div>

</div>

<div className=' mb-2'>
<label for="formGroupExampleInput" className="form-label mx-2">Organizer</label>
<input type="text" className="form-control" placeholder="" aria-label=""/>
</div>


<div className=' mb-2'>
<label for="formGroupExampleInput" className="form-label mx-2">Description</label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<input className="btn btn-primary mt-2" type="submit" value="Submit"></input>

      </form>
    </div>
  )
}
