import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, IconToggle } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';



class App extends Component {

  

  render() {
    return (
      <div className="app-content">

      

    <Layout>
        
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">
          
        <img className="SiteImage" src={process.env.PUBLIC_URL + "/Images/Icons/MyIcon_Small.png"} alt="Icon Image of Brian" align="left" />
            <div className="HeaderTitle">
              
              <div className="Header-Name" align="left">Wecome to</div>
              <div className="Header-SiteName" align="left">BrianPurdy.ca</div>
            </div>
			  
            </Link>} >

  
            <Navigation className="Nav-MainBar">  
                <Link to="/" className="Nav-Links">Home</Link>
                <Link to="/resume" className="Nav-Links">Resume</Link>
                <Link to="/aboutme" className="Nav-Links">About Me</Link>
                <Link to="/projects" className="Nav-Links">Projects</Link>
                <Link to="/contact" className="Nav-Links">Contact</Link>
            </Navigation>
            
        </Header>


        <Drawer className="Drawer-SideBar" id="SideBar" aria-expanded="false" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">My Site Links</Link>}>
            <Navigation >
              <Link onClick={IconToggle} to="/" className="Nav-Links" className="Nav-SideBar">Home</Link>
              <Link onClick={IconToggle} to="/resume" className="Nav-Links" className="Nav-SideBar">Resume</Link>
              <Link onClick={IconToggle} to="/aboutme" className="Nav-Links" className="Nav-SideBar">About Me</Link>
              <Link onClick={IconToggle} to="/projects" className="Nav-Links" className="Nav-SideBar">Projects</Link>
              <Link onClick={IconToggle} to="/contact" className="Nav-Links" className="Nav-SideBar">Contact</Link>
            </Navigation>
        </Drawer>

        

        <Content>
            <div className="page-content" />
            <Main />

            

        </Content>

        
    </Layout>

    
    
</div>


    );
  }
}

export default App;
