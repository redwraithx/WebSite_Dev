import React, { Component } from 'react';
import { Grid, Cell, Footer } from 'react-mdl';
import GetVideo from '../ProjectData/GetVideo';
import '../ProjectData/GetVideo.css';
import '.././Landing.css';
import LoadFooter from './LoadFooter';
import ViewSelectedImage from './ViewSelectedImage';


const tempImage = "/Images/ProjectImages/defaultProjectImage.png";

const publicURL = process.env.PUBLIC_URL;



class Landing extends Component {


  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render() {
    return(
      
        <div style={{width: '100%', height: 'auto', marginTop: '0px' }}  >


          <Grid className="landing-grid">
            <Cell col={12}>

              <div className="banner-text">
                <h2 className="landingTopName" style={{ paddingBottom: '0px' }}>Brian Purdy</h2>
                <h2 className="landingTop" style={{ paddingBottom: '15px' }}>Video Game Programmer and Designer</h2>

                <div style={{ padding: '10px', overflow: 'auto', paddingTop: '0px' }} >
                  <div style={{ padding: '20px', textAlign: 'left', color: 'grey' }}>
                    <h3 style={{ textAlign: 'center' }}>Welcome to my Portfolio! On this page, you will find samples of my current work and recent updates. Please see my Projects page for completed work. </h3>
                    <br />
                    <br />

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
                        <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;A Knight's Journey&nbsp;&nbsp;</div>
                        <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 10/7/2021 ]</div>
                      </div>
                      <div style={{ display: 'inline-grid' }}>
                        <div className="landingContentBody" >
                        Testing out the players Healing ability and effects.
                        </div>
                        <div style={{ display: 'inline-flex', width: '100%', height: 'auto'  }} >
                          <div className="landingContentImagesFrame" style={{ }} >
                            <ViewSelectedImage imageSource={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/10-7-2021/PlayerHealingTest.gif' } imageSourceThumbNail={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/10-7-2021/PlayerHealingTest_Thumbnail.gif' } imageAltText="Player casting a healing spell on themselves image" imageClassName="landingContentInlineImages" />
                          </div>
                          <div className="landingContentVideoStyle" style={{ width: '247px', height: '138px', marginTop: '13px'  }} >
                              <GetVideo embedId="zY434IR7xXU"  />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Entry */}


                    {/* Start Entry */}
                    <div style={{ marginBottom: '15px' }}>
                      <div className="landingContentHeader" style={{ display: 'inline-flex' }}>
                        <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;A Knight's Journey&nbsp;&nbsp;</div>
                        <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 9/21/2021 ]</div>
                      </div>
                      <div style={{ display: 'grid' }}>
                        <div className="landingContentBody" >
                        I am currently working on a game called "A Knight’s Journey". This game will be a 3rd person game, using kinematic characters. I will be programming all the physics myself with the exception of any static characters such as castle guards.
                        </div>
                        <div className="landingContentImagesFrame" style={{ width: '100%', height: 'auto' }} >
                          <ViewSelectedImage imageSource={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/9-21-2021/PlayerAtHealingWell.png' } imageSourceThumbNail={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/9-21-2021/PlayerAtHealingWell_Thumbnail.png' } imageAltText="Player getting healing from magical well image" imageClassName="landingContentInlineImages" />
                          <ViewSelectedImage imageSource={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/9-21-2021/PlayerDeniedEntry.png'  } imageSourceThumbNail={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/9-21-2021/PlayerDeniedEntry_Thumbnail.png' } imageAltText="Player denied entry to the castle" imageClassName="landingContentInlineImages" />
                          <ViewSelectedImage imageSource={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/9-21-2021/HealingSpellTest.png'  } imageSourceThumbNail={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/9-21-2021/HealingSpellTest_Thumbnail.png' } imageAltText="Player Testing his healing ability" imageClassName="landingContentInlineImages" />
                          <ViewSelectedImage imageSource={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/9-21-2021/ArchersTest.gif'  } imageSourceThumbNail={ process.env.PUBLIC_URL + '/Images/ProjectImages/KnightsJourney/9-21-2021/ArchersTest_Thumbnail.gif' } imageAltText="Archers shooting at players current position - TEST" imageClassName="landingContentInlineImages" />
                        </div>
                      </div>
                    </div>
                    {/* End Entry */}



                    {/* Start Entry */}
                    <div style={{ marginBottom: '15px' }}>
                      <div className="landingContentHeader" style={{ display: 'inline-flex' }}>
                        <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;Wash Off Game Bug Fixes&nbsp;&nbsp;</div>
                        <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 9/17/2021 ]</div>
                      </div>
                      <div style={{ display: 'grid' }}>
                        <div className="landingContentBody" > 
                        This most recent update includes bug fixes for network interactions and updated player-data variables.
                        </div>
                        <div  className="landingContentImagesFrame" style={{  width: '100%', height: 'auto' }} >
                        { /* <img className="landingContentInlineImages" src={process.env.PUBLIC_URL + '/Images/ProjectImages/WashOff/WashOff_Title_ThumbNail.png'} /> */ }

                       { /*  
                        <img 
                          id="img1"
                          className="landingContentInlineImages" 
                          src={ process.env.PUBLIC_URL + '/Images/ProjectImages/WashOff/WashOff_Title_ThumbNail.png' } 
                          alt="Archers shooting at players current position - TEST" 
                          onClick={() => console.log("image was clicked"), <ViewSelectedImage imageSource={this.src} /> }
                          />
                          */ }

                          <ViewSelectedImage imageSource={ process.env.PUBLIC_URL + '/Images/ProjectImages/WashOff/WashOff_Title.png' } imageSourceThumbNail={ process.env.PUBLIC_URL + '/Images/ProjectImages/WashOff/WashOff_Title_Thumbnail.png' } imageAltText="Wash Off - Game got some networking updates - title image" imageClassName="landingContentInlineImages" />
                          

                        </div>
                      </div>
                    </div>
                    {/* End Entry */}

                    
                    {/* Start Entry */}
                    <div style={{ marginBottom: '15px' }}>
                      <div className="landingContentHeader" style={{ display: 'inline-flex' }}>
                        <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;Turret Blaster Game Update&nbsp;&nbsp;</div>
                        <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 9/17/2021 ]</div>
                      </div>
                      <div style={{ display: 'grid' }}>
                        <div className="landingContentBody" > 
                        In this update, I fixed some bugs and created a rifle for the player to visually shoot from.<br />NOTE: Creating models is not something I normally do, however the assets I had were not compatible with the version of Unreal I was using.
                        </div>
                        <div className="landingContentImagesFrame" style={{  width: '100%', height: 'auto' }} >
                          <div className="landingContentVideoStyle" style={{ width: '247px', height: '138px',  }} >
                            <GetVideo embedId="Dlsj1gUE_Kw"  />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Entry */}

                    
                    
                    {/* Start Entry */}
                    <div style={{ marginBottom: '15px' }}>
                      <div className="landingContentHeader" style={{ display: 'inline-flex' }}>
                        <div style={{ borderTop: '1px solid gray', borderLeft: '2px solid grey'  }}>&nbsp;&nbsp;WebSite Rebuild; First Update &nbsp;&nbsp;</div>
                        <div style={{ paddingLeft: '10px', fontSize: 'small', color: 'grey' }}>[ Date: 9/5/2021 ]</div>
                      </div>
                      <div style={{ display: 'grid' }}>
                        <div className="landingContentBody" > 
                        This is the first day the website was pushed online.
                        </div>
                      </div>
                    </div>
                    {/* End Entry */}


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
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank" hidden>
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
