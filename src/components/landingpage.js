import React, { Component } from 'react';
import { Grid, Cell, Footer } from 'react-mdl';
import '.././Landing.css';


class Landing extends Component {

  render() {
    return(
      <div style={{width: '100%', height: 'auto', marginTop: '2em' }} scroll >
        <Grid className="landing-grid">
          <Cell col={12}>
            
            
            

            <div className="banner-text">
              <h2 className="landing">Video Game Programming and Design</h2>
            



              <div style={{ padding: '10px', overflow: 'auto', paddingTop: '2px' }} >
                <div style={{ padding: '20px', textAlign: 'left', color: 'gray' }}>

                  <h5 className="landingContentHeader"><u>My Current Project</u></h5>
                  <p className="landingContentBody">
                  <u>9/21/2021</u>:<br /> Working on a game called "A Knights Journey". This game will be a 3rd person game using kinematic characters where I will be dealing with all the physics myself except for any static characters such as castle guards which do not interact with the world except to turn away the player if approached.
                  </p>
                </div>
                <div style={{ padding: '20px', textAlign: 'left', color: 'gray' }}>

                  <h5 className="landingContentHeader"><u>Recent Project updates</u></h5>

                    <b><u>Wash Out Update</u></b>: Bug fixes for network interactions and updated player binary save data for future use.


                </div>

              </div>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/brianpurdy01" rel="noopener noreferrer" target="_blank">
                  <img src={process.env.PUBLIC_URL + "/Images/SocialIcons/linkedin_512x512_white.png"} height="50px" width="50px" className="SocialMediaLinks" alt="LinkedIn Image Icon" />
                  {/* <i className="fa fa-linkedin-square SocialMediaLinks" aria-hidden="true" aria-label="View my LinkedIn" /> */ }
                </a>
              
                {/* Github */}
                <a href="https://github.com/redwraithx/" rel="noopener noreferrer" target="_blank" className="SocialMediaLinks" >
                  <img src={process.env.PUBLIC_URL + "/Images/SocialIcons/github_512x512_white.png"} height="50px" width="50px" alt="LinkedIn Image Icon" />
                  {/* <i className="fa fa-github-square" aria-hidden="true" aria-label="View my github"  /> */}
                </a>

                {/* Youtube */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <img src={process.env.PUBLIC_URL + "/Images/SocialIcons/youtube_512x512_white.png"} height="50px" width="50px" className="SocialMediaLinks" alt="LinkedIn Image Icon" />
                  {/* <i className="fa fa-youtube-square" aria-hidden="true" aria-label="View my Youtube"  /> */}
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
        <div style={{ paddingTop: '10px' }} />

          <hr style={{  }} />


          <Footer size="2" style={{   }}>
            <div align="center">BrianPurdy.ca @ 2021, best viewed @ 1920x1080 resolution.</div>
          </Footer>
        

      </div>

      
    )
  }
}

export default Landing;
