import React from "react";
import './About.css';

function About() {
    return (
        <div id="about">

            <div className="titleContainer">
            <div className="title">What's a Davin Henrik...?</div>
            </div>

            <div className="AboutPage">
                <div className="StateContainer">
            <div className="NDPicture" id="picture">FARGO</div>
            <div className="StateText">
                <h3>North Dakota State University</h3>
                    <ul className="listSizing">
                        <li>Bachelors of Science in Economics</li>
                        <li>Bachelors of Science in Emergency Management</li>
                    </ul>
            </div>
            </div>

            <div className="StateContainer">
                <div className="NCPicture" id="picture">SALISBURY</div>
                <div className="StateText">
                    <h3>Project Management</h3>
                    <ul className="listSizing">
                        <li>Successfully track product from vision to "on-shelf"</li>
                        <li>Lead weekly updates for stakeholders on timeline status </li>
                        <li>Stay-at-home parent during Covid shutdown</li>
                        <li>Began learning web development</li>
                    </ul>
                </div>
            </div>

            <div className="StateContainer">
                <div className="TNPicture" id="picture">KNOXVILLE</div>
                <div className="StateText">
                    <h3>Software Development</h3>
                    <ul className="listSizing">
                        <li>Working daily with REACTJS, HTML5, CSS3</li>
                        <li>Ready to work in Software Development!</li>
                    </ul>
                </div>
            </div>     
        </div>
        
    </div>
        
    );
};

export default About;