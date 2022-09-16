import React, { Component } from 'react';
import NavBar from './NavBar'



class App extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div className="container">
          <NavBar />
        </div>
      )
    }
  }
  
  export default App;