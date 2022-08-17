
import React, { Component } from 'react';
import EventsContainer from './EventsContainer';
import UserProfile from './UserProfile';
// import Login from './Login';


const NavBar =()=>{
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       eventList: ['hello tehre im revnt list'],
  //       lastEventId: 10000,
  //       ssidStatus: false,
  //       userLoggedIn: false,
  //       userInfo: {name: 'Jenna', lastname: 'Moon'}
  //     }
  //     this.loginRequest = this.loginRequest.bind(this)
  //     this.renderUserPage = this.renderUserPage.bind(this)
  //   }

  //   loginRequest(){
  //     const username = document.getElementById('_username');
  //     const password = document.getElementById('_password');
  //     console.log('loginRequest send');
  //     const data = {username: username.value, password: password.value}
  //     console.log(JSON.stringify(data));
  //     // Fetch request logic here
  //     fetch('http://localhost:3000/user', {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(data)
  //     })
  //     .then(data=>{
  //       return data.json()
  //     })
  //     .then(data=>{
  //       console.log('parsed data:', data.userAuth);
  //       if (data.userAuth) {
  //         // function that creates and assigns SSID
  //         this.setState({...this.state, ssidStatus: true})
  //         console.log(this.state)
  //       }
  //     })
  //   }

  //   renderUserPage(){
  //     // Grab user's page somehow
  //     console.log("renderUserPage Button")

  //     // fetch request and grab user data
  //     // fetch('http://localhost:3000/userProfile')
  //     //   .then(data => data.json())
  //     //   .then(data => {
  //     //     this.state.userInfo = data;
  //     //   })
        
  //     // Pass data into prop

  //     this.setState({...this.state, userLoggedIn: true})
  //     console.log('userLoggedIn state: ', this.state.userLoggedIn);
  //   }

  //   // User enters website
  //     // User logs in -> render my events button
  //       // click on my-events -> re-direct to another page with just their events

    
  //   render() {
  //     let ssidCheck = this.state.ssidStatus;
  //     let login;
  //     let userInfo = this.state.userInfo;
  //     console.log(userInfo);
  //     if (ssidCheck === true){
  //       if (this.state.userLoggedIn === true){
  //         console.log("this.userLoggedIn is true");
  //         // add props data in to UserProfile
  //         login = <UserProfile userInfo = {userInfo}/>;
  //       }
  //       else{
  //         login = <button onClick={()=>{this.renderUserPage()}}>User Page</button>;
  //       }

  //     } else {
  //       login =
  //       <div >
  //           <form id="login-form">
  //               <input id="_username" name="username" type="text" placeholder="username"></input>
  //               <input id="_password" name="password" type="password" placeholder="password"></input>
  //               <button type="button" onClick={()=>{this.loginRequest()}}>SUBMIT</button>
  //               <a href='./signup'>Create an Account</a>
  //           </form>
  //       </div>
  //     }


      return(
        <div className="outerBox">
          <div className="nav-bar">
            <h1 id="header " >Who's Going?!!!!</h1>

            <div className="login-form-feature">
              
            </div>
          </div>

          <div className='mainContainer'>
            {/* <EventsContainer eventList={this.state.eventList} /> */}
          </div>
        </div>
      )
    }



export default NavBar;