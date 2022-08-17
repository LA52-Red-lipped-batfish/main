import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Events from './Events'
import "./Homepage.scss"

const Homepage = () => {

  const [renderArray,updateArray] = useState([]);
  const [index,addIndex] = useState(7);


useEffect(()=>{
  axios.get('http://localhost:8080/getEvent')
  
  .then(res => updateArray(res.data)) 
},[])


window.addEventListener('scroll',()=>{
  if(window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight)
  {
    addIndex(index+5)
  }
});

  const [renderArray,updateArray] = useState([]);
  const [index,addIndex] = useState(7);


useEffect(()=>{
  axios.get('http://localhost:8080/getEvent')
  
  .then(res => updateArray(res.data)) 
},[])


window.addEventListener('scroll',()=>{
  if(window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight)
  {
    addIndex(index+5)
  }
});

  return (
    <div className='eventBox'>
      <form action='http://localhost:8080/api' method='post'>
    <div className=' border border-dark p-3 mt-5' style={{width:'400px'}}>
    <div className='d-flex justify-content-start flex-column'>
<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Event Title</label>
  <input type="text" name='eventTitle' className="form-control" id="exampleFormControlInput1" placeholder="event name"/>
  <label name='eventAddress' for="exampleFormControlInput1"className="form-label">Location</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="location"/>
  <label for="exampleFormControlInput1"className="form-label">Date</label>
  <input  className='form-control' type="date" name="eventDate" id="" />
  <label for="exampleFormControlInput1"className="form-label">Time</label>
  <input  className='form-control' type="time" name="eventTime" id="" />
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="text" name='imageLink' className="form-control" id="exampleFormControlInput1" placeholder="image address"/>

            </div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1 "  className="form-label mt-3">Description</label>
  <textarea name='eventDescription' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div className='d-flex justify-content-center'>
  <button className='btn btn-lg btn-primary mt-3' type="submit">SUBMIT</button>
  </div>
</div>
</div>
</div>
</form>



{renderArray.slice(0,index).map(e=><Events cards={e} key={e.eventTitle}
></Events>)}



</div>
  )
}

export default Homepage;