import React, { Component } from 'react';
import { Grid, Footer, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '.././AboutMe.css';
import LoadFooter from './LoadFooter';


class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div style={{ paddingLeft: '5px' }} scroll>
        
        <Grid className="aboutme-grid">
         
          <div className="aboutMeEntryStyle1" style={{ border: '0px none' }}>
            <img src={process.env.PUBLIC_URL + "/Images/Me/MyImage.png"} width="180px" height="200px" style={{ alignSelf: 'left' }} />    
          </div>

            <div className="aboutMeEntryStyle1" style={{  }}>
              
              <h5 className="aboutMeEntryHeader" ><u>About Me</u></h5>
              
              I am a recent graduate of the Toronto Film School where I received a Diploma in Game Programming and Design. I am searching for work where being a part of a team means delivering great games and content to people who love to Game!  I dream of being a part of a company that creates games that inspire the next generation of players and programmers.

As someone committed to self-growth and ongoing learning, I am currently working on programming a new game having turned off the internal game physics. The physics is kinematically programmed and the game is state-based AI.
                <br />
               

            </div>
            <div className="aboutMeEntryStyle2" style={{  }}  >

              <h5 className="aboutMeEntryHeader" ><u>My Role with our Capstone Project: Wash Off</u></h5>

              Working as a team in several roles, I helped create multiple game play systems including the machines, the item and item-grab programming, the game and audio manager, and the level manager. &nbsp;My official title was Programming Director and I assisted the programmers in code or with design direction. 
I was also the sole Networking Programmer.


               

            </div>

            <div className="aboutMeEntryStyle1" style={{  }}>
              
              <h5 className="aboutMeEntryHeader" ><u>Recent Work</u></h5>
              
              I previously worked in IT as a Junior Systems Administrator with the Halifax Convention Centre. 
              I specialized in Networking and WiFi Configuration as the Centre relocated to its new, main location.<br /><br />
  
 
              This position is where I really started to use my programming skills to make some of the everyday tasks more automated. 
              An example of this would be the ‘Network Communication-Room Monitor’ app in my C# projects. 
              This saved the company time, as an employee no longer needed to physically check 23 different communication rooms to make sure they were online.
<br />
              
<br />When my contract finished, I decided to return to school and transition into game development. I was looking forward to learning from others who had experience in big and small studios. 
              <br />
               

            </div>



        </Grid>

        <div>
          
          <LoadFooter />

        </div>


      </div>

      
    )
  }
}

export default About;
