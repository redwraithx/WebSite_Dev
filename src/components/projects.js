import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import UnityProjectsFetchClass from '../ProjectData/UnityProjectsFetchClass';
import CSharpProjectsFetchClass from '../ProjectData/CSharpProjectsFetchClass';
import CppProjectsFetchClass from '../ProjectData/CppProjectsFetchClass';
import UnrealProjectsFetchClass from '../ProjectData/UnrealProjectsFetchClass';
import '.././Projects.css';



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  

  toggleCategories() {
    

    if(this.state.activeTab === 0) {
      return(
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 

          <UnityProjectsFetchClass />

        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 

          <CSharpProjectsFetchClass />

        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 

          <CppProjectsFetchClass />

        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 

          <UnrealProjectsFetchClass />

        </div>
      )
    }

  }

  


  render() {

    

    return(
      <div style={{width: 'auto', margin: 'auto'}}>

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

          </Tabs>


      </div >

        {this.toggleCategories()}
            
      </div>
    )
  }
}

export default Projects;
