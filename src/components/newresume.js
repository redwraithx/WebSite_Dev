import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import '.././Resume.css';

class Resume extends Component {
  render() {
    return(
      <div >
        <Grid>
          <Cell className="resume-right-col" col={12} style={{ width: '90%', alignSelf: '50%' }}>
            <div col={4} style={{ display: 'inline-flex', width: '100%', height: '58em' }} >
                <div style={{ border: '1px solid magenta', width: '30%' }} >
                    {/* LeftSide */}
                    <div className="resumeContentTopLeft" style={{ textAlign: 'right', border: '1px solid cyan', height: '10em' }}>
                        {/* Left Top */}
                        <p style={{ justifyContent: 'center', alignContent: 'center', width: '100%', height: '100%', border: '1px solid magenta' }}>
                            <div style={{ paddingRight: '20px', marginTop: '10px', marginBottom: '10px' }} >Email<img src="" width="20px" height="20px" /></div>
                            <div style={{ paddingRight: '20px', marginTop: '10px', marginBottom: '10px' }} >number<img src="" width="20px" height="20px" /></div>
                            <div style={{ paddingRight: '20px', marginTop: '10px', marginBottom: '10px' }} >website<img src="" width="20px" height="20px" /></div>
                        </p>
                    </div>
                    <div style={{ border: '1px solid cyan', height: '48em' }} >
                        {/* Left Bottom */}
                        <h2 align="center" style={{ marginTop: '10px' }}>Education</h2>
                        
                    </div>
                </div>
                <div style={{ border: '1px solid magenta', width: '80%' }} >
                    {/* RightSide */}
                    <div style={{ border: '1px solid cyan', height: '10em' }} >
                        {/* Right Top */}
                    </div>
                    <div style={{ border: '1px solid cyan', height: '48em' }} >
                        {/* Right Bottom */}
                    </div>

                </div>
            </div>     
                 

          </Cell>
        </Grid>
      </div > 
    )
  }
}

export default Resume;
