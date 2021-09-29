import React from "react";
import {Card} from 'react-bootstrap';
import GetVideo from './GetVideo';
import ".././ProjectData/Box.css";
import './GetVideo.css';





const CSharpProjectsFetchClass = () => {

    const projectInfo = [
        { gameName: 'Network COM Room Tester', engineName: 'C# WinAPP', codeLanguage: 'C#', numberOfMonthsToCreate: 1, createdBy: 'Brian Purdy', description: 'This was used to test communication rooms for there online state during thier construction.', videoURL: 'UQlD3zxqHXU',  imgURL: '', gitHubURL: 'https://github.com/redwraithx/NetworkComRoomTester', playOrDownloadURL: 'http://www.google.ca', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },
        { gameName: 'BoardGame Dice Roller', engineName: 'C# WinAPP', codeLanguage: 'C#', numberOfMonthsToCreate: 1, createdBy: 'Brian Purdy', description: 'This Dice Rolling App was created to give 1 or 3 random dice rolls for a boardgame I created, also uses cryptography to give better random rolls.', videoURL: '_8yQL14sUYs',  imgURL: '', gitHubURL: 'https://github.com/redwraithx/Dice-Roller', playOrDownloadURL: 'http://www.google.ca', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },
        { gameName: 'BoardGame Random Card Selector', engineName: 'C# WinAPP', codeLanguage: 'C#', numberOfMonthsToCreate: 1, createdBy: 'Brian Purdy', description: 'This Random Card selector App was create to allow me to give random cards from 2 differnt pools to players virtually with a touch of a button, used for my BoardGame', videoURL: 'kWTEFGRGDdk',  imgURL: '', gitHubURL: 'https://github.com/redwraithx/Random-Card-Selector', playOrDownloadURL: 'http://www.google.ca', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },
        { gameName: 'BoardGame Player Info Tracker', engineName: 'C# WinAPP', codeLanguage: 'C#', numberOfMonthsToCreate: 1, createdBy: 'Brian Purdy', description: 'This App was created to keep tack of all the players game info as well as gave one place for everyone to see where everyone was, while playing virtually.', videoURL: 'HSFlOn0U2BU',  imgURL: '', gitHubURL: 'https://github.com/redwraithx/BoardGame-Player-Info-Tracker', playOrDownloadURL: 'http://www.google.ca', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },
        //{ gameName: 'Get Weather', engineName: 'C# WinAPP', codeLanguage: 'C#', numberOfMonthsToCreate: 1, createdBy: 'Brian Purdy', description: 'Using my first API to connect into getting weather when I first started programming.', videoURL: '',  imgURL: '', gitHubURL: 'https://github.com/redwraithx/Get-Weather', playOrDownloadURL: 'http://www.google.ca', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },


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





export default CSharpProjectsFetchClass;