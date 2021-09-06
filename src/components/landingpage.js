import React, { Component } from 'react';
import { Grid, Cell, Footer } from 'react-mdl';
import '.././Landing.css';


class Landing extends Component {

  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}} scroll>
        <Grid className="landing-grid">
          <Cell col={12}>
            
            
            

            <div className="banner-text">
              <h1>Video Game Programming and Design</h1>
            
              <hr />

              <p>[ C# | <img src={process.env.PUBLIC_URL + "/Images/Icons/unityIcon32x32.png"} alt="Unity Logo Image" /> Unity3D | C++ | <img src={process.env.PUBLIC_URL + "/Images/Icons/unrealIcon32x32.png"} alt="Unreal Logo Image" /> Unreal ]</p>

              <div className="social-links">

                {/* LinkedIn */}
                
                  <i className="fa fa-linkedin-square" aria-hidden="true" aria-label="View my LinkedIn" />
              
                {/* Github */}
                <a href="https://github.com/redwraithx/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" aria-label="View my github"  />
                </a>

                {/* Youtube */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" aria-label="View my Youtube"  />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>

        <Footer size="2" style={{  position: 'absolute', left: '0', bottom: '0', right: '0' }}>
          <div align="center">BrianPurdy.ca @ 2021</div>
          <div align="center">Best viewed @ 1920x1080 resolution.</div>
        </Footer>

      </div>

      
    )
  }
}

export default Landing;
