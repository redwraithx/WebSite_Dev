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
import ReactGA from 'react-ga';
const TRACKING_ID = "G-2QZWQM6HNW";
ReactGA.initialize(TRACKING_ID);


ReactDOM.render(

  

  <React.StrictMode>
    <HashRouter scroll>
      
      <App />
      {/* <Resume /> */}

    </HashRouter>
  </React.StrictMode>
  , document.getElementById('root'));
 

registerServiceWorker();
