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

            <h2 className="ResumeTextColor" style={{paddingTop: '2em'}}>Brian Purdy</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: 'auto'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: 'auto'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(902) 210-8215</p>
            <h5>Email</h5>
            <p>brianpurdy@live.com</p>
            <h5>Web</h5>
            <p><a href="brianpurdy.ca">BrianPurdy.ca</a></p>

            <hr style={{ justifySelf: 'center', borderTop: '3px solid #833fb2', width: 'auto'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
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
