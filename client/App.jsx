import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
// import NavBar from './NavBar';
import Login from './components/Login';
import './index.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      // main: '#f0e5f0', navbar color
      dark: '#002884',
      // dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>

      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Homepage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};


export default App;