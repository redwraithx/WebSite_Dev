import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, IconToggle, IconButton } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import ScrollToTopButton from './ProjectData/ScrollToTop';

const menuItems = [
  'Home',
  'Resume',
  'About Me',
  'Projects',
  'Contact'
];


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { activeTab: 0 };
  }
  
  

    

  render() {

    const activeStyle = { color: 'lightgrey' };

    return (
      <div className="app-content">

      

    <Layout>
        
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">
          
        <img className="SiteImage" src={process.env.PUBLIC_URL + "/Images/MyIcons/MyIcon_Small.png"} alt="Icon Image of Brian" align="left" />
            <div className="HeaderTitle">
              
              <div className="Header-Name" align="left">Wecome to</div>
              <div className="Header-SiteName" align="left">BrianPurdy.ca</div>
            </div>
			  
            </Link>} >

  
            <Navigation className="Nav-MainBar">  
                <Link 
                style={ this.state.activeTab === 0 ? activeStyle : {} } 
                //onClick={ this.setState({ activeTab: 0 }) } 
                to='/' className="Nav-Links">Home</Link>
                <Link to='/resume' className="Nav-Links" >Resume</Link>
                <Link to='/aboutme' className="Nav-Links">About Me</Link>
                <Link to='/projects' className="Nav-Links">Projects</Link>
                <Link to='/contact' className="Nav-Links">Contact</Link>
            </Navigation>
            
        </Header>


        <Drawer className="Drawer-SideBar" id="SideBar" aria-expanded="false" title={<Link style={{textDecoration: 'none', color: 'black'}} to='/'>My Site Links</Link>}>
            <Navigation >
              <Link onClick={IconToggle} to='/' className="Nav-Links" className="Nav-SideBar">Home</Link>
              <Link onClick={IconToggle} to='/resume' className="Nav-Links" className="Nav-SideBar">Resume</Link>
              <Link onClick={IconToggle} to='/aboutme' className="Nav-Links" className="Nav-SideBar">About Me</Link>
              <Link onClick={IconToggle} to='/projects' className="Nav-Links" className="Nav-SideBar">Projects</Link>
              <Link onClick={IconToggle} to='/contact' className="Nav-Links" className="Nav-SideBar">Contact</Link>
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
