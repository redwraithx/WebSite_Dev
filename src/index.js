import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import {Footer } from 'react-mdl';

ReactDOM.render(
  <BrowserRouter scroll>
    <App />

    

  </BrowserRouter>
  , document.getElementById('root'));

 

registerServiceWorker();


