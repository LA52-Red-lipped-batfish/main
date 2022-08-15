import React, { Component } from 'react';
import Event from './Event';

class EventsContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        eventList: []
      }
    }

    componentDidMount() {
      console.log('in componentDidmount')
      //fetch request to events to grab all data
      fetch('/events')
       .then(res => res.json())
       .then(eventList => {
        this.setState({
          eventList
        })
       })
    }

    render() {
      if (!this.state.eventList) return (
        <div>
          <h1>Loading events, please wait...</h1>
        </div>
      );

      const eventElems = this.state.eventList.map((event, i) => {
        return (
          <Event key={i}
          info={event}/>
        );
      });

      console.log(eventElems);
      return(
        <div class='eventContainerBox'>
          {eventElems}
        </div>
      )
    }
}

// const EventsContainer = (props) => {
  
//   //name of event
//   //description of event
//   //url of image

//   // do some code here
//   return (
//     //render some shit
//     <div> 
//       <h1>
//       {props.eventList}
//       </h1>
//       </div>
//   )
// }


export default EventsContainer