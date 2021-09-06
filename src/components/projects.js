import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import CSharpProjectsFetch from '../ProjectData/CSharpProjectsFetch';
import '.././Projects.css';



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  

  toggleCategories() {
    

    if(this.state.activeTab === 0){
      return(
        <div style={{width: 'auto', height: 'auto', margin: 'auto'}} scroll>

          <h3>Unity page</h3>

        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        
        <div  style={{ alignContent: 'center', justifyContent: 'center', background: 'repeat linear-gradient(to right, #1d2d44, #001f54, #1d2d44)', backgroundAttachment: 'fixed' }} > 

          <CSharpProjectsFetch />

        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          <h3>C++ page</h3>

        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
          <h3>Unreal page</h3>

        </div>
      )
    }

  }

  


  render() {

    

    return(
      <div style={{width: 'auto', margin: 'auto'}}>

        <div className="Projects-Header" >

          <Tabs activeTab={this.state.activeTab} onChange={  (tabId) => this.setState({ activeTab: tabId }) } style={{ flex: '1', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <Tab style={ { top: '0', left: '0', width: '30%', fontSize: '80%', fontWeight: 'bolder', color: ( this.state.activeTab === 0 ) ? 'black' : 'gray', background: ( this.state.activeTab == 0) ? 'darkgray' : '' } } >Unity Projects</Tab>
            <Tab style={ { top: '0', left: '0', width: '30%', fontSize: '80%', fontWeight: 'bolder', color: ( this.state.activeTab === 1 ) ? 'black' : 'gray', background: ( this.state.activeTab == 1) ? 'darkgray' : '' } } >C# Projects</Tab>
            <Tab style={ { top: '0', left: '0', width: '30%', fontSize: '80%', fontWeight: 'bolder', color: ( this.state.activeTab === 2 ) ? 'black' : 'gray', background: ( this.state.activeTab == 2) ? 'darkgray' : '' } } >C++ Projects</Tab>
            <Tab style={ { top: '0', left: '0', width: '30%', fontSize: '80%', fontWeight: 'bolder', color: ( this.state.activeTab === 3 ) ? 'black' : 'gray', background: ( this.state.activeTab == 3) ? 'darkgray' : '' } } >Unreal Projects</Tab>
          </Tabs>


      </div >

        {this.toggleCategories()}
            
      </div>
    )
  }
}

export default Projects;
