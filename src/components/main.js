import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './newresume';


const Main = () => (
  
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/projects' component={Projects} />
      <Route path='/newresume' component={Resume} />
      <Route path='/aboutme' component={AboutMe} />
      <Route path='/contact' component={Contact} />
      <Route path='/' component={LandingPage} />
    </Switch>
)

export default Main;
