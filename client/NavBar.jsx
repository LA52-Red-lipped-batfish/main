// export default function NavBar() {
//     return (
//         <div>
//             <h2>This is a NavBar</h2>
//             <h3>This is a h3 header</h3>
//         </div>
//     )
// }

// export default NavBar
import React, { Component } from 'react';
import EventsContainer from './EventsContainer';


class NavBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        eventList: ['hello tehre im revnt list'],
        lastEventId: 10000,
      }
    }
    
    render() {
      return(
        <div className="outerBox">
          <h1 id="header">Who's Going?</h1>
          <form method="POST" action='/'>
            <input name="username" type="text" placeholder="username"></input>
            <input name="password" type="password" placeholder="password"></input>
            <input type='submit' value='login'></input>
          </form>
          <a href='./signup'>Create an Account</a>
          <EventsContainer eventList={this.state.eventList} />
        </div>
      )
    }
}

export default NavBar;