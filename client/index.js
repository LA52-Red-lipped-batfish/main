// import React from 'react';
// import { render } from 'react-dom';
// // import ReactDOM from 'react-dom/client'

// import App from './App.jsx';


// render(
// <App />, 
// document.getElementbyId('contents'));

import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx';

const container = document.getElementById('contents')
const root = createRoot(container)

root.render(
  <App />
)