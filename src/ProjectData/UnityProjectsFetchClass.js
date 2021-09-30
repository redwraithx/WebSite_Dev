import React from "react";
import {Card} from 'react-bootstrap';
import GetVideo from './GetVideo';
import ".././ProjectData/Box.css";
import './GetVideo.css';






const UnityProjectsFetchClass = () => {

    const projectInfo = [
        { gameName: 'Wash Off', engineName: 'Unity', codeLanguage: 'C#', numberOfMonthsToCreate: 10, createdBy: 'Brian Purdy, Evan Peppler, Owen Hooper, Anthony Rinaldi, Chirag Patel, Hoai Anh Ung', description: 'This is a Party Game that is network based. The game is a futuristic-styled game where robots do the laundry competing with each other for the highest score!', videoURL: '6cQ6vkNM28Q',  imgURL: '', gitHubURL: 'https://github.com/redwraithx/SpinCycle', playOrDownloadURL: 'https://redwraithx.itch.io/wash-off', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },
        { gameName: 'Reel Time', engineName: 'Unity', codeLanguage: 'C#', numberOfMonthsToCreate: 1, createdBy: 'Brian Purdy, Owen Hooper, Jonas and Poppinoffski', description: 'This was a submission to Brackeys Game Jam 2020. It is a game similar to ‘Flappy Birds’ (Dong Nguyen) only the player catches fish and powerups as well as dodging trash in the water. Another feature is the player’s ability to reverse time if the player has obtained the resource needed to do so. Some of the items I worked on were the animations, logic for the health/life bars, code for the fish (pick up and dying), and writing the audio system.', videoURL: 'ht87KKlASGA',  imgURL: '', gitHubURL: '', playOrDownloadURL: 'https://redwraithx.itch.io/reeltime', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },
        { gameName: 'Metroid Clone', engineName: 'Unity', codeLanguage: 'C#', numberOfMonthsToCreate: 3, createdBy: 'Brian Purdy', description: 'Based off of NES\' \'Metroid\', this is a clone made in Unity for a class project. This was my first game that successfully incorporated AI.', videoURL: '',  imgURL: '', gitHubURL: '', playOrDownloadURL: 'https://redwraithx.itch.io/metroid-clone', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },
        { gameName: 'Galaxy Shooter Pro 2.5D', engineName: 'Unity', codeLanguage: 'C#', numberOfMonthsToCreate: 2, createdBy: 'Brian Purdy', description: 'a 2D game using 3D styled assets within 3D space.', videoURL: 'S26-VHDMSCw',  imgURL: '', gitHubURL: '', playOrDownloadURL: 'https://github.com/redwraithx/Space-Shooter-Pro-2.5D', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },
        { gameName: 'RPG World', engineName: 'Unity', codeLanguage: 'C#', numberOfMonthsToCreate: 2, createdBy: 'Brian Purdy', description: 'This game is first-person role-playing, open-world type concept. Created in Unity 3D with 4K textures, this was a fantastic experience that I intend to explore again. I enjoyed working with the animations, models, and improving on my AI logic. ', videoURL: 'ehmCnGUHqIo',  imgURL: '', gitHubURL: '', playOrDownloadURL: 'https://github.com/redwraithx/', comingSoonIMG: '/Images/ProjectImages/coming-soon.png' },

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





export default UnityProjectsFetchClass;