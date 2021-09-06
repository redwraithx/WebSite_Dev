import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <BrowserRouter scroll>

    <App />

  </BrowserRouter>
  , document.getElementById('root'));
 

registerServiceWorker();
