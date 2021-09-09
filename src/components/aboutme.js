import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '.././AboutMe.css';

class About extends Component {
  render() {
    return(
      <div style={{ paddingLeft: '5px' }} scroll>
        
        <Grid className="aboutme-grid">
         
          <div className="TestStyle" style={{ paddingTop: '0px', marginTop: '10px', marginRight: '80%' , marginLeft: '0%', marginBottom: '30px', textAlign: 'left', border: '1px solid magenta' }}>
            <img src={process.env.PUBLIC_URL + "/Images/Me/MyImage.png"} width="180px" height="200px" style={{ alignSelf: 'left' }} />    
          </div>

            <div className="TestStyle" style={{ padding: '20px', marginRight: '35%' , marginLeft: '5%', marginBottom: '15px', textAlign: 'left', border: '1px solid magenta' }}>

            
              
              <h5><u>About Me</u></h5>
              
                I am a recent graduate of the Toronto Film School where I received a Diploma in Game Programming and Design. 
                I am searching for work where being a part of a team means delivering great games and content to people who love to Game!  
                I dream of being a part of a company that creates games that inspire the next generation of players and programmers.
                As someone committed to self-growth and ongoing learning, I am currently working on programming a new game having turned off the internal game physics. 
                All the physics is kinematically programmed and the game is state-based AI.

            </div>
            <div className="TestStyle" style={{ padding: '20px', marginRight: '40%' , marginLeft: '0%', marginBottom: '15px', textAlign: 'left', border: '1px solid magenta' }}>

              <h5><u>My Role with our Capstone Project</u></h5>

              I was the Programming Director and assisted the programmers in code or with design direction. 
              I was also the sole Networking programmer.
              Working as a team in several roles, I helped create multiple game play systems including the machines, 
              the item and item-grab programming, the game and audio manager, and the level manager, 


            </div>

            <div className="TestStyle" style={{ padding: '20px', marginRight: '35%' , marginLeft: '5%', marginBottom: '15px', textAlign: 'left', border: '1px solid magenta' }}>
              
              <h5><u>About Me</u></h5>
              
                I am a recent graduate of the Toronto Film School where I received a Diploma in Game Programming and Design. 
                I am searching for work where being a part of a team means delivering great games and content to people who love to Game!  
                I dream of being a part of a company that creates games that inspire the next generation of players and programmers.
                As someone committed to self-growth and ongoing learning, I am currently working on programming a new game having turned off the internal game physics. 
                All the physics is kinematically programmed and the game is state-based AI.

            </div>
            <div className="TestStyle" style={{ padding: '20px', marginRight: '40%' , marginLeft: '0%', marginBottom: '15px', textAlign: 'left', border: '1px solid magenta' }}>

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
