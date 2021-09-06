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
      <Route exact path="/gh-pages-url/" component={LandingPage} />
      <Route path="/gh-pages-url/aboutme" component={AboutMe} />
      <Route path="/gh-pages-url/contact" component={Contact} />
      <Route path="/gh-pages-url/projects" component={Projects} />
      <Route path="/gh-pages-url/resume" component={Resume} />
      <Route path="/gh-pages-url/" component={LandingPage} />
    </Switch>
  </Router>
)

export default Main;
