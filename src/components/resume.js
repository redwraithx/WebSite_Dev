import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import '.././Resume.css';

class Resume extends Component {
  render() {
    return(
      <div className="BackGround-DivColor ResumeTextColor">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center' }} scroll >
              
            </div>

            <h2 className="ResumeTextColor" style={{ paddingTop: '2em' }}>Brian Purdy</h2>
            <h4 style={{ color: 'lightgray', paddingBottom: '15px' }}>Programmer And Game Design</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: 'auto', paddingBottom: '15px'  }}/>
            <p style={{ textAlign: 'left', paddingLeft: '3%', paddingRight: '5%', paddingBottom: '15px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: 'auto', paddingBottom: '15px' }}/>
            <h5 style={{ textAlign: 'left', paddingLeft: '30%' }} >Address: <text style={{ color: '#84d2f6' }} >Hamilton, Ontario</text></h5>
            <h5 style={{ textAlign: 'left', paddingLeft: '30%' }} >Phone: <text style={{ color: '#84d2f6' }} >(902) 210-8215</text></h5>
            <h5 style={{ textAlign: 'left', paddingLeft: '30%' }} >Email: <a href="brianpurdy@live.com" style={{ color: '#84d2f6' }} >brianpurdy@live.com</a></h5>
            <h5 style={{ textAlign: 'left', paddingLeft: '30%', paddingBottom: '15px' }} >WebSite:  <a href="https://www.brianpurdy.ca" style={{ color: '#84d2f6' }} >BrianPurdy.ca</a></h5>

            <hr style={{ justifySelf: 'center', borderTop: '3px solid #833fb2', width: 'auto'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education 
              startYear={2020}
              endYear={2021}
              schoolName="Toronto Film School"
              schoolDescription="Mainly this school dealt with the film industry education. One thing to note was that they offered C# and C++ as launguages that would be used during its courses which was good for both big and small gaming potentially."
            />

            <Education
              startYear={2015}
              endYear={2017}
              schoolName="Eastern College"
              schoolDescription="A school that offered various training and an opertunity to get on the job training which was a nice bonus to add to the training that was offered on top of the skills to work in the I.T. industry."
            />
            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="External Game Beta Tester for Ubisoft"
              jobDescription="Test various games in house and others alike. Sometimes the testing was described before hand, but, sometimes the testing goals were more phyicalogical focusing on game play feel as well as filing a document or documents on the sessions, this also included video recordings the majority of the time as well. Was a fantasict experience and one of the driving forces behind my career transition. *Note I am under NDA about any specific work and games I had the honor to assist with."
            />

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Junior Network Systems Administrator at the Halifax Convention Centre"
              jobDescription="My primary job was to support our all systems and personel as needed with I.T. issues and ticks that have been submitted as well as the networking infastructure of the Sports Arena and the new Convention Centre that just completed in Halifax, NS. "
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Skills</h2>


              <Skills style={{ justifySelf: 'space-evenly' }}
                skill="Unity"
                progress={65}
              />
              <Skills
                skill="C#"
                progress={50}
              />
              <Skills
                skill="C++"
                progress={40}
              />
              <Skills
                skill="Unreal"
                progress={25}
              />


          </Cell>
        </Grid>
      </div > 
    )
  }
}

export default Resume;
