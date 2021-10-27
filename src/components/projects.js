import React, { Component, useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-mdl';
import UnityProjectsFetchClass from '../ProjectData/UnityProjectsFetchClass';
import CSharpProjectsFetchClass from '../ProjectData/CSharpProjectsFetchClass';
import CppProjectsFetchClass from '../ProjectData/CppProjectsFetchClass';
import UnrealProjectsFetchClass from '../ProjectData/UnrealProjectsFetchClass';
import OtherProjectsFetchClass from '../ProjectData/OtherProjectsFetchClass';
import '.././Projects.css';
import '../ProjectData/ScrollToTop';
import LoadFooter from './LoadFooter';




class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0,
      
    };

    
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  

  toggleCategories() {
    
   

    if(this.state.activeTab === 0) {
      return(
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 
          <UnityProjectsFetchClass />
          <LoadFooter  />

        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 

          <CSharpProjectsFetchClass />
          <LoadFooter />

        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 

          <CppProjectsFetchClass />
          <LoadFooter />

        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 

          <UnrealProjectsFetchClass />
          <LoadFooter />

        </div>
      )
    } else if(this.state.activeTab === 4) {
      return (
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 

          <OtherProjectsFetchClass />
          <LoadFooter />

        </div>
      )
    }

  }

  


  render() {

    

    return(
      <div style={{width: 'auto', margin: 'auto'}}>

      <h3 style={{ border: '1px solid magenta', color: 'green', textAlign: 'center' }}  hidden>
        Status: {this.props.loggedInStatus}
      </h3><br /><br />

        <div className="Projects-Header" >

          <Tabs activeTab={this.state.activeTab} onChange={  (tabId) => this.setState({ activeTab: tabId }) } style={{ flex: '1', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            
            <Tab style={ { justifyContent: 'left', border: '1px solid #001f54' ,top: '0', left: '0', padding: '0', margin: '0', width: '100px', fontSize: '80%', fontWeight: 'bolder', color: ( this.state.activeTab === 0 ) ? 'black' : 'lightgray', background: ( this.state.activeTab === 0) ? 'darkgray' : 'rgb(40, 41, 94)' } } >
                <img src={process.env.PUBLIC_URL + "/Images/MyIcons/unityIcon32x32.png"} alt="Unity Logo Image" style={{ height: '14px', width: '14px' }} /> Unity
            </Tab>

            <Tab style={ { border: '1px solid #001f54' ,top: '0', left: '0', width: '100px', fontSize: '80%', fontWeight: 'bolder', color: ( this.state.activeTab === 1 ) ? 'black' : 'lightgray', background: ( this.state.activeTab === 1) ? 'darkgray' : 'rgb(40, 41, 94)' } } >C#</Tab>
            
            <Tab style={ { border: '1px solid #001f54' ,top: '0', left: '0', width: '100px', fontSize: '80%', fontWeight: 'bolder', color: ( this.state.activeTab === 2 ) ? 'black' : 'lightgray', background: ( this.state.activeTab === 2) ? 'darkgray' : 'rgb(40, 41, 94)' } } >C++</Tab>

            <Tab style={ { justifyContent: 'left', border: '1px solid #001f54' ,top: '0', left: '0', padding: '0', margin: '0', width: '100px', fontSize: '80%', fontWeight: 'bolder', color: ( this.state.activeTab === 3 ) ? 'black' : 'lightgray', background: ( this.state.activeTab === 3) ? 'darkgray' : 'rgb(40, 41, 94)' } } >
              <img src={process.env.PUBLIC_URL + "/Images/MyIcons/unrealIcon32x32.png"} alt="Unreal Logo Image" style={{ height: '14px', width: '14px' }} /> Unreal
            </Tab>

            <Tab style={ { border: '1px solid #001f54' ,top: '0', left: '0', width: '100px', fontSize: '80%', fontWeight: 'bolder', color: ( this.state.activeTab === 4 ) ? 'black' : 'lightgray', background: ( this.state.activeTab === 4) ? 'darkgray' : 'rgb(40, 41, 94)' } } >Misc</Tab>

          </Tabs>


      </div >

        
        {
          this.toggleCategories()          
        }
            

        

        {/* <button onClick={console.log("goto top button pressed"), window.scrollTo(0, 0)} >
          <img className="scrollToTopButton" src={process.env.PUBLIC_URL + "/Images/MyIcons/ScrollToTopArrowV2.png"}  alt='Go to top' style={{  }}  />
        </button> */}

      </div>
    )
  }
}

export default Projects;
