import React from 'react'
import Events from './Events'


const Homepage = () => {
  return (
    <div className='d-flex justify-content-start'>
      <form action='http://localhost:8080/api' method='post'>
    <div className=' border border-dark p-3 mt-5' style={{width:'400px'}}>
    <div className='d-flex justify-content-start flex-column'>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Event Name</label>
  <input type="text" name='event' className="form-control" id="exampleFormControlInput1" placeholder="event name"/>
  <label for="exampleFormControlInput1"className="form-label">Location</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="location"/>
  <label for="exampleFormControlInput1"className="form-label">Date</label>
  <input  className='form-control' type="date" name="date" id="" />
  <label for="exampleFormControlInput1"className="form-label">Time</label>
  <input  className='form-control' type="time" name="" id="" />
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1 "  className="form-label mt-3">Description</label>
  <textarea name='description' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div className='d-flex justify-content-center'>
  <button className='btn btn-lg btn-primary mt-3' type="submit">SUBMIT</button>
  </div>
</div>
</div>
</div>
</form>
<Events></Events>
</div>
  )
}

export default Homepage