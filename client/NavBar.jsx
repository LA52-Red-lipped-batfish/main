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
import UserProfile from './UserProfile';
// import EventsContrainer from '../EventsContainer.jsx';

// logic
// when someone logs in, we send fetch request to '/user'

// Create an onSubmit event handler 
  // When that submitted, grab pw and username
  // Create fetch (post) request
    // add in post body, the pw and username


class NavBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        // eventList: [],
        lastEventId: 10000,
      }
      this.loginRequest = this.loginRequest.bind(this)
    }

    loginRequest(){
      // event.preventDefault();
      const username = document.getElementById('_username');
      const password = document.getElementById('_password');
      // console.log('loginRequest');
      // console.log('userName: ' ,userName.value);
      // console.log('password: ', password.value);
      console.log('loginRequest send');
      const data = {username: username.value, password: password.value}
      console.log(JSON.stringify(data));
      // Fetch request logic here
      fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(data=>{
        return data.json()
      })
      .then(data=>{
        console.log('parsed data:', data);
      })
      // Grab the information from the DOM
      // Put into the fetch request body
    }

    render() {
      return(
        <div className="outerBox">
          <h1 id="header">Who's Going?</h1>
          <form id="login-form">
            <input id="_username" name="username" type="text" placeholder="username"></input>
            <input id="_password" name="password" type="password" placeholder="password"></input>
            <button type="button" onClick={()=>{this.loginRequest()}}>SUBMIT</button>
          </form>
          <a href='./signup'>Create an Account</a>
          <UserProfile />
        </div>
      )
    }
}

export default NavBar;