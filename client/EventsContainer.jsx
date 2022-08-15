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
        return this.setState({
            eventList
        })
       })
       .catch((err) => {
        console.log('this is error', err)
       })
    }
    // componentDidUpdate() {
    //   this.setState((state) => {
    //     return state;
    //   })
    // }
    render() {
      return(
        <Event eventList={this.state.eventList} />
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