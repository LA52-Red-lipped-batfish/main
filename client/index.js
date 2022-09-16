// This is because our webpack entry point is index.js but it doesn't have a reference to index.html file. 
// require('file-loader?name=[name].[ext]!./index.html')

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './scss/app.scss';

ReactDOM.render(<App />, document.getElementById('contents'));
