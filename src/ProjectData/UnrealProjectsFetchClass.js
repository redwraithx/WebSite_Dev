import React from "react";
import {Card} from 'react-bootstrap';
import GetVideo from './GetVideo';
import ".././ProjectData/Box.css";
import './GetVideo.css';





const UnrealProjectsFetchClass = () => {

    const projectInfo = [
        { gameName: 'Turret Blaster', engineName: 'Unreal', codeLanguage: 'C++ & Blueprints', numberOfMonthsToCreate: 3, createdBy: 'Brian Purdy', description: 'This is a time-limited game where the player runs around with a rifle destroying all the turrets before the timer expires.  ', videoURL: 'x_5xKzY49m8',  imgURL: '', gitHubURL: 'https://github.com/redwraithx/TurretBlaster', playOrDownloadURL: 'http://www.google.ca', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },

    ];

    const renderProject = (project, index) => {

    const hasYouTubeURL = project.videoURL;
    const hasCustomImageURL = project.imgURL;
    

    function GetVideoOrImage(project){

        if(hasYouTubeURL !== "") {
            console.log("have yt url");
            return (
                <GetVideo embedId={hasYouTubeURL} className="ContentStyle" style={{ minWidth: '375', maxWidth: '549', minHeight: '211', maxHeight: '309', paddingLeft: '4px', paddingRight: '4px', paddingTop: '6px', paddingBottom: '6px', }} />
                
            );
        }
        else if(hasCustomImageURL !== "") {
            console.log("no yt url");

            return (
                <Card.Img variant="top" src={process.env.PUBLIC_URL + hasCustomImageURL} className="ContentStyle" style={{ paddingLeft: '4px', paddingRight: '4px', paddingTop: '6px', paddingBottom: '6px', }} />
            );
        }
        else {
            console.log("No Links yet, displaying comingSoonIMG");

            return (
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/Images/ProjectImages/defaultProjectImage.png"} className="ContentStyle" style={{ minWidth: '375', maxWidth: '549', minHeight: '211', maxHeight: '305',  paddingLeft: '4px', paddingRight: '4px', paddingTop: '6px', paddingBottom: '6px', }} />
            );
        }

    }
        

        return (
            <Card key={index} className="box ContentStyle" style={{ height: 'auto', width: 'auto' }}>
                
                <Card.Body className="ContentStyle">

                    <Card.Title className="ContentAlignment" style={{ fontWeight: 'bolder', height: '1rem' }}><h1>{project.gameName}</h1></Card.Title>

                    

                    <div height="100rem" width="200rem" style={{  }} >
                        {GetVideoOrImage()}
                    </div>


                    <div className="ContentTextStyle ContentStyle" style={{ height: '16rem' }}>
                        Game Engine: {project.engineName}<br />
                        Code Language: {project.codeLanguage}<br />
                        Months in Development: {project.numberOfMonthsToCreate}<br />
                        Developed by: {project.createdBy}<br /><br />
                    
                        Description: {project.description}<br />
                    </div>
                    
                    <div className="ProjectLinks ContentAlignment" style={{ height: '3rem' }} >
                    <button className="ProjectLinkButton" onClick={() => {if(project.gitHubURL){window.open(project.gitHubURL, "_blank")}}} style={{ color: 'Black', fontSize: '18px', fontWeight: 'bolder', paddingTop: '2px', paddingBottom: '2px', marginTop: '0px', marginBottom: '0px', borderRadius: '10px', alignSelf: 'center' }} >GitHub</button>
                        <button className="ProjectLinkButton" onClick={() => {if(project.playOrDownloadURL){window.open(project.playOrDownloadURL, "_blank")}}} style={{ color: 'Black', fontSize: '18px', fontWeight: 'bolder' , paddingTop: '2px', paddingBottom: '2px', marginTop: '0px', marginBottom: '0px', borderRadius: '10px', alignSelf: 'center'  }} >Demo</button>
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





export default UnrealProjectsFetchClass;