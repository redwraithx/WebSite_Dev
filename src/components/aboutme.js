import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '.././AboutMe.css';

class About extends Component {
  render() {
    return(
      <div scroll>
        
        <Grid className="aboutme-grid">
         

            <div className="TestStyle" style={{ padding: '20px', textAlign: 'left' }}>

            <img src={process.env.PUBLIC_URL + "/Images/Me/MyImage.png"} width="70px" height="75px" style={{ alignSelf: 'left', marginBottom: '30px' }} />
              
              <h5><u>About Me</u></h5>
              
                I am a recent graduate of the Toronto Film School where I received a Diploma in Game Programming and Design. 
                I am searching for work where being a part of a team means delivering great games and content to people who love to Game!  
                I dream of being a part of a company that creates games that inspire the next generation of players and programmers.
                As someone committed to self-growth and ongoing learning, I am currently working on programming a new game having turned off the internal game physics. 
                All the physics is kinematically programmed and the game is state-based AI.

            </div>
            <div className="TestStyle" style={{ padding: '20px', textAlign: 'left' }}>

              <h5><u>My Role with our Capstone Project</u></h5>

              I was the Programming Director and assisted the programmers in code or with design direction. 
              I was also the sole Networking programmer.
              Working as a team in several roles, I helped create multiple game play systems including the machines, 
              the item and item-grab programming, the game and audio manager, and the level manager, 


            </div>


        </Grid>

      </div>
    )
  }
}

export default About;
