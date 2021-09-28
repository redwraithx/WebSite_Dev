import React, { Component } from 'react';
import { Grid, Footer, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '.././AboutMe.css';
import LoadFooter from './LoadFooter';


class About extends Component {
  render() {
    return(
      <div style={{ paddingLeft: '5px' }} scroll>
        
        <Grid className="aboutme-grid">
         
          <div className="aboutMeEntryStyle1" style={{ border: '0px none' }}>
            <img src={process.env.PUBLIC_URL + "/Images/Me/MyImage.png"} width="180px" height="200px" style={{ alignSelf: 'left' }} />    
          </div>

            <div className="aboutMeEntryStyle1" style={{  }}>
              
              <h5 className="aboutMeEntryHeader" ><u>About Me</u></h5>
              
              I am a recent graduate of the Toronto Film School where I received a Diploma in Video Game Programming and Designer. 
              Currently searching for work where being a part of a team means delivering great games and content to people who love to Game! 
              I dream of being a part of a company that inspire the next generation of players and programmers alike while making great games. 
              As someone committed to self-growth and ongoing learning, I am currently working on programming a new game having turned off the internal game physics. 
              All the physics is kinematically programmed and the game is using state-based AI.<br />
               

            </div>
            <div className="aboutMeEntryStyle2" style={{  }} hidden >

              <h5 className="aboutMeEntryHeader" ><u>My Role with our Capstone Project: Wash Off</u></h5>

              I was the Programming Director/Network programmer/General GamePlay programmer and assisted the programmers in code or with design direction. 
              As the sole Networking programmer, I had a steep hill to climb but I did preveil with a lot of research and experimentation. 
              I was also the sole Networking programmer. 
              Working as a team in several roles, I helped create multiple game play systems including the machines, the item and item-grab programming, the game and audio manager, and the level manager,
               

            </div>

            <div className="aboutMeEntryStyle1" style={{  }}>
              
              <h5 className="aboutMeEntryHeader" ><u>Recent Work</u></h5>
              
              I use to work as an I.T. Junior Systems Administrator at the N.S Halifax Convention Centre. 
              This is where I really started to use my skills to make some of the everyday tasks I did more automated through little applications, like the network COM Room tester app in my c# projects.               This saved me time, when I had to run around checking 23 different communication rooms to make sure they were online.<br />
              I did this while we were still sourcing a network management solution and during the new buildings construction. 
              When my contract was up I decided that I was going to follow my heart and transition into game development. 
              This has been a great experience to not only learn from others who have worked in big and small studios, but also to lend my experiences and help those that are just starting out as well.<br />
               

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
