import React from "react";
import './BioLinks.css';

function BioLinks() {
    return (
        <div>
            <div className="linkBox">
            <ul className="ListEdit">
                <li className="dotRemove">
                    <a href="https://github.com/davinTheDeveloper"  target="_blank" rel="noreferrer noopener">
                        <div className="gitLink"></div></a> 
                    </li>
                <li className="dotRemove"> 
                <a href="https://www.linkedin.com/in/davinhenrik/" target="_blank" rel="noreferrer noopener">
                    <div className="linkedinLink"></div></a> 
                </li>
                </ul>
            </div>
        </div>

    )
}

export default BioLinks;