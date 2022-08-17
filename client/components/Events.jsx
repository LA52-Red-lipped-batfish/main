import React from 'react'
import { useState } from 'react'



const Events = () => {

const [pop,setPop] = useState('none')

const popfunction = ()=>{
    if(pop ==='block') {setPop('none')}else{setPop('block');}


    
}
  return (
    
    
   <div className='ms-5 mt-5'>

<div className="card" style={{width: "23rem"}}>
  <img src="https://cdn.shopify.com/s/files/1/0003/3279/1871/files/DSC06029.jpg?v=1632317105" class="card-img-top" alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title">Events Name</h5>
    {/* grab data from database with name/data/number people attend */}
    <p className="card-text">Motorcycle Party</p>
    <p className="card-text">20 Participants</p>
    <p className="card-text"><img src="https://www.technipages.com/wp-content/uploads/2020/10/fix-google-maps-not-updating-location-600x341.png" alt="" style={{width:'50px'}}/>330 laurel ave</p>
    <p className="card-text"> <img src="https://storage.needpix.com/rsynced_images/clock-4314041_1280.jpg" alt="" style={{width:'50px'}}/>Aug 10 / 8:30PM</p>
    <button  className="btn btn-success btn-lg">I AM IN</button>
    <button onClick={popfunction} className="btn btn-success btn-info ms-3 btn-lg">Description</button>
    <div className='pop fs-5 fw-bold mt-4' style={{display:pop}}>Save the date! Heat up the streets with us during Bike Night. Enjoy live music from Full Circle, delicious tacos, beautiful babes, bikes, vendors and ice-cold beer. </div>
    
  </div>
</div>

   </div>
  )
}

export default Events