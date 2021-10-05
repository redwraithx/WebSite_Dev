import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from './components/newresume';




ReactDOM.render(

  

  <React.StrictMode>
    <HashRouter scroll>
      
      <App />
      {/* <Resume /> */}

    </HashRouter>
  </React.StrictMode>
  , document.getElementById('root'));
 

registerServiceWorker();
