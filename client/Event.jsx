import React, { useEffect } from 'react';

const Event = props => {
  // console.log(props.eventList)

  return(
    <div className="eventBox">
      <h2 className="event-title">{props.info.name}</h2>
      <img src={props.info.img}></img>
      <p>{props.info.description}</p>
    </div>
  )
}

export default Event;