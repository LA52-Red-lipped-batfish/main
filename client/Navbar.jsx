import React, { Component } from 'react';
// import EventsContrainer from '../EventsContainer.jsx';


class NavBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        eventList: [],
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
          <EventsContainer/>
        </div>
      )
    }
}

export default NavBar;