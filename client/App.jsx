import React, {Component} from 'react';
import { render } from 'react-dom';
import NavBar from './Navbar.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <h1>Hello</h1>
      </div>
    )
  }
}



export default App;