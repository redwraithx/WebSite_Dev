//import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import { Link, Redirect } from 'react-router-dom';


function App() {
  return (    
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Welcome to BrianPurdy.ca">
            <Navigation>
                <Link to="./" >Home</Link>
                <Link to="./resume">Resume</Link>
                <Link to="./aboutme">About</Link>
                <Link to="./projects">Projects</Link>
                <Link to="./contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Site Navigation">
            <Navigation>
                <Link to="./">Home</Link>
                <Link to="./resume">Resume</Link>
                <Link to="./aboutme">About</Link>
                <Link to="./projects">Projects</Link>
                <Link to="./contact">Contact</Link>
            </Navigation>
        </Drawer>

        <Content>
            <div className="page-content">
                <Main />
            </div> 
        </Content>
    </Layout>
</div>
  );
};

export default App;
