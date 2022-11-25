import React from 'react'

export default function ServiceForm() {
  return (
<div className='container'>
        <h2 className='mb-2'>Service Detail</h2>
      <form>
      <div className=' mb-2'>
<label for="formGroupExampleInput" className="form-label mx-2">Service Title</label>
<input type="text" className="form-control" placeholder="" aria-label=""/>
</div>

<div className=' mb-2'>
<label for="formGroupExampleInput" className="form-label mx-2">Description</label>
<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="row g-3 mt-2">
<div className="col"> 
<label for="example" className='mb-2'>Starting Date <i className="fas fa-calendar input-prefix"></i></label>
<input placeholder="Select date" type="date" id="date" name='date' className="form-control"/>
</div>


<div className="col"> 
<label for="example" className='mb-2'>Ending Date <i className="fas fa-calendar input-prefix"></i></label>
<input placeholder="Select date" type="date" id="date" name='date' className="form-control"/>
</div>
</div>

<input className="btn btn-primary mt-3" type="submit" value="Submit"></input>

      </form>
    </div>
  )
}
