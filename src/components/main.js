import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  
  <Router history={createHistory({basename: process.env.PUBLIC_URL})}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
)

export default Main;
