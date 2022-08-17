import React from 'react';
import Events from './Events';

const cards = [
  {
    eventName: 'Michael "s birthday',
    participants: 100,
    location: '300 1st street,Arcadia,CA,91006',
    date: 'Oct 20th 2022',
    time: '8:20PM',
    description: 'Have fun ',
    imgsrc: "https://www.funimada.com/assets/images/cards/big/bday-254.gif"
  },

  {
    eventName: 'Motorcycle party',
    participants: 999,
    location: '100 1st street,Arcadia,CA,91006',
    date: 'Oct 10th 2022',
    time: '8:30PM',
    description: 'Let"party',
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9lJwMZJh8Lnm78xKGoTVQYHAtUHOsr_-vA&usqp=CAU"
  }

];
const Homepage = () => {

  return (
    <div className='d-flex justify-content-start'>
      <form action='http://localhost:8080/api' method='post'>
        <div className=' border border-dark p-3 mt-5' style={{ width: '400px' }}>
          <div className='d-flex justify-content-start flex-column'>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Event Name</label>
              <input type="text" name='event' className="form-control" id="exampleFormControlInput1" placeholder="event name" />
              <label for="exampleFormControlInput1" className="form-label">Location</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="location" />
              <label for="exampleFormControlInput1" className="form-label">Date</label>
              <input className='form-control' type="date" name="date" id="" />
              <label for="exampleFormControlInput1" className="form-label">Time</label>
              <input className='form-control' type="time" name="" id="" />
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1 " className="form-label mt-3">Description</label>
              <textarea name='description' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <div className='d-flex justify-content-center'>
                <button className='btn btn-lg btn-primary mt-3' type="submit">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {cards.map(e => <Events cards={e} key={e.eventName}
      ></Events>)}


    </div>
  );
};

export default Homepage;