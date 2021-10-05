import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import '.././Resume.css';
import { whileStatement } from '@babel/types';





class Resume extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div className="ResumePageFontStyle"  >

        <Grid >
          <Cell col={12}>
            <div style={{ height: '30px', color: 'white', fontSize: '18px', marginTop: '20px', marginBottom: '5px', border: '0px solid magenta', display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ width: '250px', textAlign: 'center', border: '1px solid gray' }}>
                <a className="ResumeDownload" href={process.env.PUBLIC_URL + "/Downloads/MyResume/BrianPurdyResume.pdf"} download >
                  Download my Resume Here
                </a>
              </div>
            </div>
          </Cell>

          <Cell className="resume-right-col" col={12} style={{ width: '60%', border: '0px solid magenta', display: 'flex', justifyContent: 'center' }} >
            <div col={12} style={{ width: '100%', height: 'auto' }} >
                
                
                <table width="100%" height="100%" style={{ border: '0px solid cyan'  }}>
                  <tbody>
                    <tr className="ResumeHeader" style={{ width: '100%', height: '150px', border: '0px solid magenta' }}>
                      <th colSpan="2" >
                        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                          <div style={{ fontSize: 'xx-large', border: '1px solid white', paddingLeft: '5px', paddingRight: '5px' }}>BP</div>
                          <div style={{ paddingLeft: '10px', fontSize: 'xx-large' }}>Brian Purdy</div>
                        </div>
                      </th>
                    </tr>
                    <tr align="center">
                      { /* Left Column */ }
                      <th className="ResumeLeftColumnBG" style={{ width: '65%', border: '0px solid yellow', backgroundColor: 'white' }}>
                        
                        <div>
                          <div className="ProfessionSummaryHeader">
                            <i>
                              Professional Summary
                            </i>
                          </div>

                          <div className="ProfessionSummary">
                            Hardworking, enthusiastic and passionate job seeker, anxious to obtain
                            entry-level Game Developer position. Previous professional experience in
                            IT and Management honed ability to work under pressure and adapt to
                            new situations and challenges. Experienced programmer ready to help
                            team achieve company goals.
                          </div>

                          <hr className="ResumeRightHrStyle" />

                        </div>

                        
                        <div style={{ textAlign: 'left', border: '0px solid magenta' }}>
                          <div className="WorkHistoryHeader">
                            <i>
                              Work History
                            </i>
                          </div>

                          <div className="WorkHistoryBody" >
                            Toronto Film School - CAPSTONE PROJECT TEAM LEADER<br />
                            Diploma in Video Game Design & Development: Game Programming<br />
                            04/2020 to 10/2021<br />
                          </div>
                          <ul className="WorkHistoryList" >
                            <li className="WorkHistoryListItem">
                              Acted as team director/lead for the programmers of our capstone at the request of the team.
                            </li>
                            <li className="WorkHistoryListItem">
                              Worked with Photon PUN2 to add Networking to Unity for our capstone. 
                              Created a lobby where players can create games or join games as they become available.
                            </li>
                            <li className="WorkHistoryListItem">
                              Worked on the base systems for the player’s movement and grab systems, 
                              the machine’s systems, item interface and class as well as the player’s saving /loading profile system.
                            </li>
                            <li className="WorkHistoryListItem">
                              Administrated the GitHub repository for our project.
                            </li>
                          </ul>



                          <div className="WorkHistoryBody" >
                            Ubisoft Halifax - GAME BETA TESTER<br />
                            Halifax, NS<br />
                            07/2017 to 10/2019<br />
                          </div>
                          <ul className="WorkHistoryList" >
                            <li className="WorkHistoryListItem">
                              Played unreleased games for fun-factor and gameplay.
                            </li>
                            <li className="WorkHistoryListItem">
                              Searched for and reported bugs.
                            </li>
                            <li className="WorkHistoryListItem">
                              Advised of game viability.
                            </li>
                            <li className="WorkHistoryListItem">
                              Currently under NDA on these projects.
                            </li>
                          </ul>



                          <div className="WorkHistoryBody" >
                            EventsEast - JUNIOR NETWORK SYSTEMS ADMINISTRATOR<br />
                            Halifax, NS<br />
                            07/2017 to 10/2019<br />
                          </div>
                          <ul className="WorkHistoryList" >
                            <li className="WorkHistoryListItem">
                              Installed, repaired and configured new desktop hardware and software. Provided support as needed.
                            </li>
                            <li className="WorkHistoryListItem">
                              Created documentation manual for Wi-Fi infrastructure including channel mapping and addressing.
                            </li>
                            <li className="WorkHistoryListItem">
                              Constant Wi-Fi scanning & equipment testing; Stabilization with Cisco and Ruckus infrastructure.
                            </li>
                            <li className="WorkHistoryListItem">
                              Cisco VoIP system: Worked with, and programmed, Cisco switches, used for infrastructure & events.
                            </li>
                            <li className="WorkHistoryListItem">
                              Built storage system (NAS) for the company's virtual servers.
                            </li>
                            <li className="WorkHistoryListItem">
                              Programmed external-facing Cisco switch for Ungerboeck's application server.
                            </li>
                            <li className="WorkHistoryListItem">
                              Created and programmed tools such as a Network Switch Status Tool which allowed staff to monitor switch activity without being present onsite.
                            </li>
                          </ul>



                          <div className="WorkHistoryBody" >
                            Eastern College - NETWORK TECHNICAL ASSISTANT<br />
                            Halifax, NS<br />
                            01/2016 to 03/2017<br />
                          </div>
                          <ul className="WorkHistoryList" >
                            <li className="WorkHistoryListItem">
                              Provided PC and printer support.
                            </li>
                            <li className="WorkHistoryListItem">
                              Re-wired the entire Campus for networking.
                            </li>
                            <li className="WorkHistoryListItem">
                              Worked on tickets as they came into the campus.
                            </li>
                          </ul>



                          <div className="WorkHistoryBody" >
                            Pizza Pizza Ltd. - CORPORATE MANAGER (NOVA SCOTIA)<br />
                            Halifax, NS<br />
                            08/2013 to 08/2016<br />
                          </div>
                          <ul className="WorkHistoryList" >
                            <li className="WorkHistoryListItem">
                              Managed 3 store locations in the Halifax Regional Municipality.
                            </li>
                            <li className="WorkHistoryListItem">
                              Responsible for hiring staff and staff management including scheduling, training, ordering, reporting.
                            </li>
                            <li className="WorkHistoryListItem">
                              Compiled OHS material into comprehensive manual; Implemented Health/Safety info stations.
                            </li>
                            <li className="WorkHistoryListItem">
                              Cross-trained existing employees to maximize team agility and performance.
                            </li>
                            <li className="WorkHistoryListItem">
                              Onboarded new employees with training and new hire documentation.
                            </li>
                          </ul>


                          <br /> <br /> <br /> <br /> <br />

                        </div>



                      </th>











                      { /* Right Column */}
                      <th className="ResumeRightColumnBG" style={{ color: 'black', width: '35%', border: '0px solid green' }}>

                        <div style={{ paddingTop: '10px', paddingBottom: '10px', border: '0px solid magenta' }}>

                          <div style={{ width: '280px', display: 'inline-flex' }}>
                            { /* <div style={{ margin: '5px' }} summary="icon" >test</div> */ }
                            <img src={process.env.PUBLIC_URL + "/Images/MyIcons/ResumeIcons/EmailIcon.png"} width="32px" height="32px" style={{ alignSelf: 'left' }} />
                            <div style={{ marginLeft: '5px', marginTop: '5px', marginBottom: '5px', fontSize: '18px' }} summary="iconInfo" >brianpurdy@live.com</div>
                          </div>

                          <div style={{ width: '280px', display: 'inline-flex' }}>
                            { /* <div style={{ margin: '5px' }} summary="icon" >test</div> */ }
                            <img src={process.env.PUBLIC_URL + "/Images/MyIcons/ResumeIcons/PhoneIcon.png"} width="32px" height="32px" style={{ alignSelf: 'left' }} />
                            <div style={{ marginLeft: '5px', marginTop: '5px', marginBottom: '5px', fontSize: '18px' }} summary="iconInfo" >(902) 210-8215</div>
                          </div>`

                          <div style={{ width: '280px', display: 'inline-flex' }}>
                            { /* <div style={{ margin: '5px' }} summary="icon" >test</div> */ }
                            <img src={process.env.PUBLIC_URL + "/Images/MyIcons/ResumeIcons/LocationIcon.png"} width="32px" height="32px" style={{ alignSelf: 'left' }} />
                            <div style={{ marginLeft: '5px', marginTop: '5px', marginBottom: '5px', fontSize: '18px', border: '0px solid blue' }} summary="iconInfo" >Hamilton, Canada L8N 1K7</div>
                          </div>

                        </div>
                        
                        <hr className="ResumeLeftHrStyle" />

                        

                        <div style={{ paddingTop: '10px', paddingBottom: '10px', border: '0px solid magenta' }}>
                          
                        <div style={{ fontSize: '18px', width: '280px', textAlign: 'left', marginTop: '5px', marginBottom: '5px' }}>
                          <i>
                            Links
                          </i>
                        </div>

                          <div style={{ width: '280px', display: 'inline-flex' }}>
                            { /* <div style={{ margin: '5px' }} summary="icon" >test</div> */ }
                            <img src={process.env.PUBLIC_URL + "/Images/MyIcons/ResumeIcons/UrlIcon.PNG"} width="32px" height="32px" style={{ alignSelf: 'left' }} />
                            <div style={{ marginLeft: '5px', margin: '5px', fontSize: '18px' }} summary="iconInfo" ><a href="https://brianpurdy.ca" target="_blank" >brianpurdy.ca</a></div>
                          </div>

                          <div style={{ width: '280px', display: 'inline-flex' }}>
                            { /* <div style={{ margin: '5px' }} summary="icon" >test</div> */ }
                            <img src={process.env.PUBLIC_URL + "/Images/MyIcons/ResumeIcons/LinkedInIcon.png"} width="32px" height="32px" style={{ alignSelf: 'left' }} />
                            <div style={{ marginLeft: '5px', margin: '5px', fontSize: '18px' }} summary="iconInfo" ><a href="https://linkedin.com/in/brianpurdy01" target="_blank" >linkedin.com/in/brianpurdy01</a></div>
                          </div>

                          <div style={{ width: '280px', display: 'inline-flex' }}>
                            { /* <div style={{ margin: '5px' }} summary="icon" >test</div> */ }
                            <img src={process.env.PUBLIC_URL + "/Images/MyIcons/ResumeIcons/GithubIcon.png"} width="32px" height="32px" style={{ alignSelf: 'left' }} />
                            <div style={{ marginLeft: '5px', margin: '5px', fontSize: '18px' }} summary="iconInfo" ><a href="https://GitHub.com/redwraithx" target="_blank" >GitHub.com/redwraithx</a></div>
                          </div>


                        </div>


                        <hr className="ResumeLeftHrStyle" />

                        

                        <div style={{ paddingTop: '10px', paddingBottom: '10px', border: '0px solid magenta' }}>
                          
                        <div style={{ fontSize: '18px', width: '350px', textAlign: 'left', marginTop: '5px', marginBottom: '5px', paddingLeft: '38px' }}>
                          <i>
                            Skills
                          </i>
                        </div>

                          <div style={{ width: '350px', display: 'flex' }}>
                            <ul >
                              <li className="SkillsList">
                                Computer & Programming skills
                              </li>
                              <li className="SkillsList">
                                Self-motivated professional
                              </li>
                              <li className="SkillsList">
                                TeamBuilding & Collaboration
                              </li>
                              <li className="SkillsList">
                                Critical thinking
                              </li>
                              <li className="SkillsList">
                                Language proficiency in C#, .NET, C++, HTML, Javascript, CSS
                              </li>
                              <li className="SkillsList">
                                Engine proficiency in Unity, Construct; Essential knowledge in Unreal
                              </li>
                              <li className="SkillsList">
                                Software proficency in Visual Studio, Rider, ReSharper, SDL Framework, Photon PUN2 Networking, GitHub
                              </li>
                            </ul>
                          </div>

                        </div>



                        <hr className="ResumeLeftHrStyle" />

                        

                        <div style={{ paddingTop: '10px', paddingBottom: '10px', border: '0px solid magenta' }}>
                          
                        <div style={{ fontSize: '18px', width: '350px', textAlign: 'left', marginTop: '5px', marginBottom: '5px', paddingLeft: '38px' }}>
                          <i>
                            Education
                          </i>
                        </div>

                          <div style={{ width: '350px', textAlign: 'left' }}>

                            <div style={{ fontSize: '17px', marginLeft: '10px' }}>
                              09/2021 - Toronto Film School, Toronto, ON<br />
                              Diploma in Video Game Design & Development: Game Programming<br /><br />
                            </div>
                            <ul style={{ marginBottom: '20px' }} >
                              <li className="EducationList">
                                Dean's List Jun 2020 to Sept 2021
                              </li>
                              <li className="EducationList">
                                Relevant Coursework Completed:
                                Cross Platform Programming I/II (Unity/C#); 
                                AI Game Programming;
                                Physics for Game Programmers I-III;
                                Game Testing & Debugging;
                                Programming Logic & Fundamentals I/II (C++); 
                                Mathematics for Game Programmers I/II;
                                Game Frameworks IIII;
                                Game Design I-IV; Scripting for Games (HTML & Javascript); 
                                Game Platforms; 
                                Mobile Game Development I/II; 
                                Graphics Programming I/II (Unreal); 
                                Game Audio I/II; 
                                Digital Programming;
                                Game Modeling
                              </li>
                            </ul>

                            <div style={{ fontSize: '17px', marginLeft: '10px' }}>
                              07/2017 - Eastern College, Halifax, NS<br />
                              Diploma in IT Systems Administration: Information Technology<br /><br />
                            </div>
                            <ul style={{ marginBottom: '20px' }} >
                              <li className="EducationList">
                                Award of Excellence 2017
                              </li>
                              <li className="EducationList">
                                Diploma with Distinction
                              </li>
                              <li className="EducationList">
                                Relevant Coursework Completed:
                                Admin (Windows, Windows Server, Microsoft Exchange Server, SQL Server, Enterprise Smartphone, Linux);
                                PowerShell Scripting; 
                                Network, Mobile and Cisco Technologies; Installing, Configuring and Configuring Advanced Windows Server Services;
                                A+; 
                                Technology Management; 
                                IT Systems and Security Administrator
                              </li>
                            </ul>

                          </div>

                        </div>


                      </th>
                    </tr>
                  </tbody>
                </table>
                
                
                
            </div>     
                 

          </Cell>
        </Grid>

        

      </div > 
      
    )
  }
}

export default Resume;
