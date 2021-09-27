import React, { Component } from 'react';
import { Grid, Cell, Footer } from 'react-mdl';
import GetVideo from '../ProjectData/GetVideo';
import '../ProjectData/GetVideo.css';
import '.././Landing.css';
import LoadFooter from './LoadFooter';

const tempImage = "/Images/ProjectImages/defaultProjectImage.png";


class Landing extends Component {

  render() {
    return(
      <div style={{width: '100%', height: 'auto', marginTop: '0px' }}  >
        <Grid className="landing-grid">
          <Cell col={12}>

            <div className="banner-text">
              <h2 className="landingTop" style={{ paddingBottom: '15px' }}>Video Game Programming and Design</h2>

              <div style={{ padding: '10px', overflow: 'auto', paddingTop: '0px' }} >
                <div style={{ padding: '20px', textAlign: 'left', color: 'grey' }}>

                  {/* Start Entry */}
                  { /*
                  <div style={{ marginBottom: '15px' }}>
                    <div className="landingContentHeader" style={{ display: 'inline-flex' }}>
                      <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;A Knights Journey&nbsp;&nbsp;</div>
                      <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 9/21/2021 ]</div>
                    </div>
                    <div style={{ display: 'grid' }}>
                      <div className="landingContentBody"  >Body</div>
                      <div style={{ display: 'inline', border: '1px solid magenta', justifyContent: 'right',  }}>
                        <a className="landingContentInlineImages">Image1</a>
                        <a className="landingContentInlineImages">Image2</a>
                        <a className="landingContentInlineImages">Image3</a>
                      </div>
                    </div>
                  </div>
                  */ }
                  {/* End Entry */}


                  {/* Start Entry */}
                  <div style={{ marginBottom: '15px' }}>
                    <div className="landingContentHeader" style={{ display: 'inline-flex' }}>
                      <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;A Knights Journey&nbsp;&nbsp;</div>
                      <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 9/21/2021 ]</div>
                    </div>
                    <div style={{ display: 'grid' }}>
                      <div className="landingContentBody" >
                        Working on a game called "A Knights Journey". This game will be a 3rd person game using kinematic characters where I will be dealing with all the physics myself except for any static characters such as castle guards which do not interact with the world except to turn away the player if approached.
                      </div>
                      <div className="landingContentImagesFrame" style={{ width: '100%', height: 'auto' }} >
                        <img className="landingContentInlineImages" src={ process.env.PUBLIC_URL + 'Images/ProjectImages/KnightsJourney/player_at_healing_well.PNG' } />
                        <img className="landingContentInlineImages" src={ process.env.PUBLIC_URL + 'Images/ProjectImages/KnightsJourney/player_denied_entry.PNG' } />
                        <img className="landingContentInlineImages" src={ process.env.PUBLIC_URL + 'Images/ProjectImages/KnightsJourney/player_healing_spell_at_healing_well.PNG' } />
                        <img className="landingContentInlineImages" src={ process.env.PUBLIC_URL + 'Images/ProjectImages/KnightsJourney/archer_group_firing_arrows_at_player.gif' } />
                      </div>
                    </div>
                  </div>
                  {/* End Entry */}

                  <div style={{ marginBottom: '15px' }}>
                    <div className="landingContentHeader" style={{ display: 'inline-flex' }}>
                      <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;Wash Out game update&nbsp;&nbsp;</div>
                      <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 9/17/2021 ]</div>
                    </div>
                    <div style={{ display: 'grid' }}>
                      <div className="landingContentBody" > 
                        Bug fixes for network interactions and updated player binary save data for future use.
                      </div>
                      <div className="landingContentImagesFrame" style={{  width: '100%', height: 'auto' }} >
                        <img className="landingContentInlineImages" src={process.env.PUBLIC_URL + '/Images/ProjectImages/WashOff/WashOff_ThumbNail.png'} />
                      </div>
                    </div>
                  </div>
                  

                  <div style={{ marginBottom: '15px' }}>
                    <div className="landingContentHeader" style={{ display: 'inline-flex' }}>
                      <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;Turret Blaster game update&nbsp;&nbsp;</div>
                      <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 9/17/2021 ]</div>
                    </div>
                    <div style={{ display: 'grid' }}>
                      <div className="landingContentBody" > 
                        Fixed some bugs and created a rifle for the player to visually shoot from.<br />NOTE: This is not something I normally do but nothing else was working at the time.
                      </div>
                      <div className="landingContentImagesFrame" style={{  width: '100%', height: 'auto' }} >
                        <div className="landingContentVideoStyle" style={{ width: '247px', height: '138px',  }} >
                          <GetVideo embedId="Dlsj1gUE_Kw"  />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  <div style={{ marginBottom: '15px' }}>
                    <div className="landingContentHeader" style={{ display: 'inline-flex' }}>
                      <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;WebSite rebuild first Update&nbsp;&nbsp;</div>
                      <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 9/14/2021 ]</div>
                    </div>
                    <div style={{ display: 'grid' }}>
                      <div className="landingContentBody" > 
                        This is the first day the website was pushed online.
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <h2 className="landingBottom" style={{  }} >            </h2>

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
                  { /* <i className="fa fa-youtube-square" aria-hidden="true" aria-label="View my Youtube"  /> */ }
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
        <div style={{ paddingTop: '0px'  }} />

        

          <LoadFooter />
        

      </div>

      
    )
  }
}

export default Landing;
