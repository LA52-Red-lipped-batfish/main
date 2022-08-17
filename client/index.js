// This is because our webpack entry point is index.js but it doesn't have a reference to index.html file. 
// require('file-loader?name=[name].[ext]!./index.html')

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('contents'));
