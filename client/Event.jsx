import React, { useEffect } from 'react';

const Event = props => {
  console.log(props.eventList)

  return(
    <div className="eventBox">
      <div>
        <span>{props.eventList.description}</span>
        <label>People are going!</label>
      </div>
    </div>
  )
}

export default Event;