import React, { Component } from 'react';
import { Grid, Cell, Footer } from 'react-mdl';
import '.././Landing.css';


class Landing extends Component {

  render() {
    return(
      <div style={{width: '100%', height: 'auto', margin: 'auto'}} scroll >
        <Grid className="landing-grid">
          <Cell col={12}>
            
            
            

            <div className="banner-text">
              <h2>Video Game Programming and Design</h2>
            



              <div style={{ padding: '10px', overflow: 'auto', paddingTop: '2px' }} >
                <div style={{ padding: '20px', textAlign: 'left', color: 'gray' }}>

                  <h5><u>About Me</u></h5>

                    I am a recent graduate of the Toronto Film School where I received a Diploma in Game Programming and Design. 
                    I am searching for work where being a part of a team means delivering great games and content to people who love to Game!  
                    I dream of being a part of a company that creates games that inspire the next generation of players and programmers.
                    As someone committed to self-growth and ongoing learning, I am currently working on programming a new game having turned off the internal game physics. 
                    All the physics is kinematically programmed and the game is state-based AI.

                </div>
                <div style={{ padding: '20px', textAlign: 'left', color: 'gray' }}>

                  <h5><u>My Role with our Capstone Project</u></h5>

                  I was the Programming Director and assisted the programmers in code or with design direction. 
                  I was also the sole Networking programmer.
                  Working as a team in several roles, I helped create multiple game play systems including the machines, 
                  the item and item-grab programming, the game and audio manager, and the level manager, 


                </div>

                

              </div>

              <i className="fa fa-linkedin-square"  />

              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/brianpurdy01" rel="noopener noreferrer" target="_blank">
                  <img src={process.env.PUBLIC_URL + "/Images/SocialIcons/linkedin_512x512_white.png"} height="32px" width="32px" className="SocialMediaLinks" alt="LinkedIn Image Icon" />
                  {/* <i className="fa fa-linkedin-square SocialMediaLinks" aria-hidden="true" aria-label="View my LinkedIn" /> */ }
                </a>
              
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
        <div style={{ paddingTop: '30px' }} />

          <Footer size="2" style={{   }}>
            <div align="center">BrianPurdy.ca @ 2021, best viewed @ 1920x1080 resolution.</div>
          </Footer>
        

      </div>

      
    )
  }
}

export default Landing;
