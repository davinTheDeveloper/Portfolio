import React from "react";
import './Projects.css';


function Projects() {

    return (
        <div className="PageBuffer" id="projects">
            <div className="titleContainer" id="about">
            <div className="title">When I say I like to code...</div>
            </div>
            <div className="pairContainer">
            <div className="pair">
            <div className="P1" id="picLink" href="https://github.com/davinTheDeveloper/wordGames.github.io" target="_blank" rel="noreferrer noopener">
            </div>
            <div className="P2" id="picLink" href="https://davinthedeveloper.github.io/nonprofitTemplate/" target="_blank" rel="noreferrer noopener"></div>
            </div>
            <div className="pair">
            <div className="P3" id="picLink" href="https://davinthedeveloper.github.io/Basic-Calculator/" target="_blank" rel="noreferrer noopener"></div>
            <div className="P4" id="picLink" href="https://davinthedeveloper.github.io/decoderCyphers/" target="_blank" rel="noreferrer noopener"></div>
            </div>
            <div className="pair">
            <div className="P5" id="picLink" href="https://github.com/davinTheDeveloper/pomodoro" target="_blank" rel="noreferrer noopener"></div>
            <div className="P6" id="picLink" href='https://davinthedeveloper.github.io/compareCharacters.github.io/' target="_blank" rel="noreferrer noopener"></div>
            </div>
            </div>
        </div>
    );
};

export default Projects;