import React from "react";
import {Card} from 'react-bootstrap';
import GetVideo from './GetVideo';
import ".././ProjectData/Box.css";
import './GetVideo.css';





const DynamicTableForProjects = () => {

    const projectInfo = [
        { gameName: 'RPG World', engineName: 'Unity', codeLanguage: 'C#', numberOfMonthsToCreate: 1, createdBy: 'Brian Purdy', description: 'This is a game description', videoURL: '',  imgURL: '', gitHubURL: 'http://github.com/', playOrDownloadURL: 'http://www.google.ca', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },

    ];

    const renderProject = (project, index) => {

    const hasYouTubeURL = project.videoURL;
    const hasCustomImageURL = project.imgURL;
    

    function GetVideoOrImage(project){

        if(hasYouTubeURL !== "") {
            console.log("have yt url");
            return (
                <GetVideo embedId={hasYouTubeURL} height="450rem" width="100%" className="ContentStyle" style={{ paddingLeft: '4px', paddingRight: '4px', paddingTop: '6px', paddingBottom: '6px', }} />
                
            );
        }
        else if(hasCustomImageURL !== "") {
            console.log("no yt url");

            return (
                <Card.Img variant="top" src={process.env.PUBLIC_URL + hasCustomImageURL} height="440rem" width="auto" className="ContentStyle" style={{ paddingLeft: '4px', paddingRight: '4px', paddingTop: '6px', paddingBottom: '6px', }} />
            );
        }
        else {
            console.log("No Links yet, displaying comingSoonIMG");

            return (
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Images/ProjectImages/coming-soon.png"} height="450rem" width="100%" className="ContentStyle" style={{ paddingLeft: '4px', paddingRight: '4px', paddingTop: '6px', paddingBottom: '6px', }} />
            );
        }

    }
        

        return (
            <Card key={index} className="box ContentStyle">
                
                <Card.Body className="ContentStyle">

                    <Card.Title className="ContentAlignment" style={{ fontWeight: 'bolder', fontVariant: 'full-width', height: '1rem' }}><h1>{project.gameName}</h1></Card.Title>

                    

                    { /* <Card.Img variant="top" src=".././Images/ProjectImages/coming-soon.png" src={project.imgURL} height="450rem" width="100%" className="ContentStyle" style={{ paddingLeft: '4px', paddingRight: '4px', paddingTop: '6px', paddingBottom: '6px', }} /> */ }
                    { /* <GetVideo embedId="TeurfjuEIgA" height="450rem" width="100%" className="ContentStyle" style={{ paddingLeft: '4px', paddingRight: '4px', paddingTop: '6px', paddingBottom: '6px', }} /> */ }

                    {GetVideoOrImage()}



                    <div className="ContentTextStyle ContentStyle" style={{ height: '18rem' }}>
                        Game Engine: {project.engineName}<br />
                        Code Language: {project.codeLanguage}<br />
                        Development Months: {project.numberOfMonthsToCreate}<br />
                        Developed by: {project.createdBy}<br /><br />
                    
                        Description: {project.description}<br />
                    </div>
                    
                    <div className="ProjectLinks ContentAlignment" style={{ height: '3rem' }} >
                        <button className="ProjectLinkButton" onClick={() => window.open(project.gitHubURL, "_blank")} style={{ color: 'Black', fontSize: '18px', fontWeight: 'bolder', paddingTop: '2px', paddingBottom: '2px', marginTop: '0px', marginBottom: '0px' }} >GitHub Repository</button>
                        <button className="ProjectLinkButton" onClick={() => window.open(project.playOrDownloadURL, "_blank")} style={{ color: 'Black', fontSize: '18px', fontWeight: 'bolder' , paddingTop: '2px', paddingBottom: '2px', marginTop: '0px', marginBottom: '0px'  }} >Game Demo Build</button>
                    </div>    

                        
                    
                </Card.Body>
            </Card>
        )
    }

    return (
        <div className="grid">
            {projectInfo.map(renderProject)}
        </div>
    );
}





export default DynamicTableForProjects;