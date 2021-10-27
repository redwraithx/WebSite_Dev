import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, IconToggle, IconButton } from 'react-mdl';
import Main from './components/main';
import { Switch, Route, Link } from 'react-router-dom';
import RouteChangeTracker from './components/RouteChangeTracker';

import LandingPage from './components/landingpage';
import AboutMe from './components/aboutme'
import Contact from './components/contact';
import Projects from './components/projects';
import Resume from './components/newresume';

//import axios from 'axios';
import LoginUI from './components/LoginUI';


              import RegisterCode from './components/Auth/RegisterCode';


const menuItems = [
  'Home',
  'Resume',
  'About Me',
  'Projects',
  'Contact'
];


class App extends Component {
  constructor() {
    super();

    this.state =
    {
      activeTab: 0, // used for sidebar selected color option

      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  /* async */ checkLoginStatus(data = {}) {
    // axios
    //   .get("http://localhost:3001/logged_in", { withCredentials: true })
    //   .then(response => {
    //     if (
    //       response.data.logged_in &&
    //       this.state.loggedInStatus === "NOT_LOGGED_IN"
    //     ) {
    //       this.setState({
    //         loggedInStatus: "LOGGED_IN",
    //         user: response.data.user
    //       });
    //     } else if (
    //       !response.data.logged_in &&
    //       (this.state.loggedInStatus === "LOGGED_IN")
    //     ) {
    //       this.setState({
    //         loggedInStatus: "NOT_LOGGED_IN",
    //         user: {}
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     console.log("check login error", error);
    //   });
    


    // const url = 'https://localhost:3000/login';

    // await fetch(url, {
    //   method: 'GET',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   redirect: 'follow',
    //   referrerPolicy: 'no-referrer',
    //   body: JSON.stringify(data)
    // });
    
    // return Response.json();
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }


  render() {

    const activeStyle = { color: 'lightgrey' };

    return (
      <div className="app-content">



    <Layout>

      {/* <div style={{ border: '0px solid magenta', width: '100%', display: 'flex', justifyContent: 'flex-end', position: 'realitive', flexShrink: '1'  }}> */}




<div style={{ display: 'inline-grid' }}>



      { /* <img className="SiteImage2" src={process.env.PUBLIC_URL + "/Images/MyIcons/MyIcon_Small.png"} alt="Icon Image of Brian" /> */ }

        {/* <div style={{ border: '1px solid green', textAlign: 'center', zIndex: '1' }}> */ }
          {/* <div className="HeaderTitle" style={{ border: '0px solid magenta' }}> */ }
            {/* <div className="" style={{ fontSize: '30px', paddingTop: '5px' }} >Wecome to</div> */}
            {/* <div className="test" style={{ color: '#84d2f6'}} >Brian Purdy</div> */}
          {/* } </div> */ }
        {/* </div> */}


<div style={{ border: '1px solid green', width: 'auto', height: 'auto', justifySelf: 'center', alignSelf: 'center'}} >
  <h3 style={{ color: 'green', width: '300px', justifyContent: 'center', textAlign: 'center' }} hidden>
    status: {this.state.loggedInStatus}
  </h3>
</div>



          {/* <Header style={{ border: '0px solid yellow', width: '34%' }} className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white', border: '0px solid yellow' }} to="/"> */}

        { /* <img className="SiteImage" src={process.env.PUBLIC_URL + "/Images/MyIcons/MyIcon_Small.png"} alt="Icon Image of Brian" align="left" /> */ }

            { /* this is for mobile screen sizes
            <div className="HeaderTitle">
              <div className="Header-Name" align="left">Wecome to</div>
              <div className="Header-SiteName" align="left">BrianPurdy.ca</div>
            </div>
            */ }

          <Header style={{ border: '0px solid yellow', width: '100%' }} className="header-color1" title={<Link style={{ textDecoration: 'none', color: 'white', border: '0px solid yellow' }} to="/">
            </Link>} >

            <Navigation className="Nav-MainBar">
                <Link
                style={ this.state.activeTab === 0 ? activeStyle : {} }
                //onClick={ this.setState({ activeTab: 0 }) }
                to='/' className="Nav-Links">Home</Link>
                <Link to='/projects' className="Nav-Links">Projects</Link>
                <Link to='/aboutme' className="Nav-Links">About Me</Link>
                <Link to='/newresume' className="Nav-Links" >Resume</Link>
                <Link to='/contact' className="Nav-Links">Contact</Link>
            </Navigation>

        </Header>
      </div>

        <Drawer className="Drawer-SideBar" style={{ backgroundColor: '#1d2d44', textAlign: 'center' }} id="SideBar" aria-expanded="false" title={<Link style={{ textDecoration: 'none', color: 'white', fontSize: 'larger', paddingRight: '40px'  }} to='/'>Site Links</Link>}>

            <Navigation style={{  }}>
              <Link onClick={IconToggle} to='/' className="Nav-Links" className="Nav-SideBar">Home</Link>
              <Link onClick={IconToggle} to='/projects' className="Nav-Links" className="Nav-SideBar">Projects</Link>
              <Link onClick={IconToggle} to='/newresume' className="Nav-Links" className="Nav-SideBar">Resume</Link>
              <Link onClick={IconToggle} to='/aboutme' className="Nav-Links" className="Nav-SideBar">About Me</Link>
              <Link onClick={IconToggle} to='/contact' className="Nav-Links" className="Nav-SideBar">Contact</Link>
            </Navigation>


            {/* <LoginUI loggedInStatus={this.state.loggedInStatus} /> */}
            

            

        </Drawer>



        <Content>
            <div className="page-content" />

            {/* <RouteChangeTracker /> */}
            {/* <Main /> */}


            <Switch>
              <Route exact path='/' component={LandingPage} />
              {/* <Route path='/projects' component={Projects} /> */}
              <Route exact path={"/projects"} render={props => (
                  <Projects 
                    {...props} 
                    //handleLogin={this.handleLogin}
                    //handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus} />
                )}
              />
              <Route exact path={"/LoginUI"} render={props => (
                  <LoginUI 
                    {...props} 
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus} 
                  />
                )}
              />
              <Route path='/newresume' component={Resume} />
              <Route path='/aboutme' component={AboutMe} />
              <Route path='/contact' component={Contact} />
              <Route path='/' component={LandingPage} />
            </Switch>



        </Content>


    </Layout>





</div>


    );
  }
}

export default App;
