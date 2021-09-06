import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <HashRouter scroll>

    <App />

  </HashRouter>
  , document.getElementById('root'));
 

registerServiceWorker();
