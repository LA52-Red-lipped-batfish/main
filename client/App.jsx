import React, { Component } from 'react';
import NavBar from './NavBar'


// export default function App() {
//     return (
//         <div>
//             <h1>This is the App</h1>
//             <NavBar />
//             <h2>Here's another line</h2>
//         </div>
//     )
// }

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