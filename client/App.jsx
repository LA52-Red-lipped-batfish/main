import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import NavBar from './NavBar';
import Login from './components/Login';
import './index.scss';



const App =() =>{
  
      return(
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Homepage />} />
          </Routes>
        </Router>
      )
    }
  
  
  export default App;