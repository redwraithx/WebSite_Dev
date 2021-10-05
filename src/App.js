import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, IconToggle, IconButton } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


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
  
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    

  render() {

    const activeStyle = { color: 'lightgrey' };

    return (
      <div className="app-content">

      

    <Layout>

      <div style={{ border: '0px solid magenta', width: '100%', display: 'flex', justifyContent: 'flex-end', position: 'realitive', flexShrink: '1'  }}>

      { /* <img className="SiteImage2" src={process.env.PUBLIC_URL + "/Images/MyIcons/MyIcon_Small.png"} alt="Icon Image of Brian" /> */ }

        {/* <div style={{ border: '1px solid green', textAlign: 'center', zIndex: '1' }}> */ }
          {/* <div className="HeaderTitle" style={{ border: '0px solid magenta' }}> */ }
            {/* <div className="" style={{ fontSize: '30px', paddingTop: '5px' }} >Wecome to</div> */}
            <div className="test" style={{ color: '#84d2f6'}} hidden>Brian Purdy</div>
          {/* } </div> */ }
        {/* </div> */}

          
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

        <Drawer className="Drawer-SideBar" id="SideBar" aria-expanded="false" title={<Link style={{ textDecoration: 'none', color: 'black', fontSize: 'medium', paddingRight: '18px', textAlign: 'center' }} to='/'>BrianPurdy.ca Site Links</Link>}>
          
            <Navigation style={{  }}>
              <Link onClick={IconToggle} to='/' className="Nav-Links" className="Nav-SideBar">Home</Link>
              <Link onClick={IconToggle} to='/projects' className="Nav-Links" className="Nav-SideBar">Projects</Link>
              <Link onClick={IconToggle} to='/newresume' className="Nav-Links" className="Nav-SideBar">Resume</Link>
              <Link onClick={IconToggle} to='/aboutme' className="Nav-Links" className="Nav-SideBar">About Me</Link>
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
